import {
  PaymentButton,
  PaymentFormContainer,
  FormContainer,
} from "./payment.form.styles";
import { CardElement } from "@stripe/react-stripe-js";
import { BUTTON_TYPE_CLASSES } from "../../button/button.component";
import { useElements, useStripe } from "@stripe/react-stripe-js";
import { FormEvent, useState } from "react";
import { useSelector } from "react-redux";
import { selectCartTotal } from "../../../store/cart/cart.selectors";
import { selectCurrentUser } from "../../../store/user/user.selectors";
import { StripeCardElement } from "@stripe/stripe-js";

const validStripeCard = (
  card: StripeCardElement | null
): card is StripeCardElement => card !== null;

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const amount = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);

  const [isPaymentProcessing, setIsPaymentProcessing] = useState(false);

  const paymentHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!stripe || !elements) return;

    setIsPaymentProcessing(true);

    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then((res) => res.json());

    const {
      paymentIntent: { client_secret },
    } = response;

    const cardDetails = elements.getElement(CardElement);

    if (!validStripeCard(cardDetails)) return;

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: cardDetails,
        billing_details: {
          name: currentUser?.displayName ?? "Guest",
        },
      },
    });

    setIsPaymentProcessing(false);
    if (paymentResult.error) {
      const {
        error: { message },
      } = paymentResult;
      alert(message);
      return;
    } else if (paymentResult.paymentIntent.status === "succeeded") {
      alert("Payment successful!");
    }
  };

  return (
    <PaymentFormContainer>
      <h2>Pay With Stripe</h2>
      <FormContainer onSubmit={paymentHandler}>
        <CardElement />
        <PaymentButton
          template={BUTTON_TYPE_CLASSES.base}
          label="Pay Now"
          isLoading={isPaymentProcessing}
        />
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
