import styled from "styled-components";

export const FieldSet = styled.fieldset`
  position: relative;
`;

export const Input = styled.input`
  background: none;
  background-color: white;
  color: var(--sub-color);
  padding: 0.5rem;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid var(--sub-color);
  margin: 0.5rem 0 0.25rem 0;

  &:focus {
    outline: none;
    border-bottom: 3px solid hsl(271, 76%, 53%);
    background-color: hsla(271, 76%, 53%, 0.065);
  }

  &:valid {
    border-bottom: 3px solid green;
    background-color: lightgreen;
  }

  &[type="password"] {
    letter-spacing: 0.3em;
  }
`;

export const Label = styled.label`
  color: var(--sub-color);
  font-size: 16px;
  font-weight: normal;
  pointer-events: none;
`;
