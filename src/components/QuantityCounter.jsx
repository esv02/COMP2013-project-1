export default function QuantityCounter({
    id,
    productQuantity,
    handleAddToQuantity,
    handleRemoveQuantity,
}) {
  return (
    <div className="ProductQuantityDiv">
      <div>
        {/*button to remove one from quantity*/}
        <button onClick={() => handleRemoveQuantity(id)}>-</button>
      </div>
      <p>{productQuantity}</p>
      <div>
        {/*button to add one to quantity*/}
        <button onClick={() => handleAddToQuantity(id)}>+</button>
      </div>
    </div>
  );
}
