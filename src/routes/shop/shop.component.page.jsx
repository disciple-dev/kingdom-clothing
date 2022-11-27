import data from "../../data/shop-data.json";

const Shop = () => {
  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default Shop;
