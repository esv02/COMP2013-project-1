import { useState } from "react";
import NavBar from "./NavBar";
import ProductsContainer from "./ProductsContainer";
import CartContainer from "./CartContainer";
import emptyCart from "../assets/cart-empty.png";
import fullCart from "../assets/cart-full.png";

export default function GroceriesAppContainer({ data }) {
  const [productQuantity, setProductQuantity] = useState(
    data.map((product) => ({
      id: product.id,
      quantity: 0,
    }))
  );

  //sets each product's cartQuantity to 0
  const [cartQuantity, setCartQuantity] = useState(
    data.map((product) => ({
      id: product.id,
      quantity: 0,
    }))
  );

  //adds one to the product quantity
  const handleAddToQuantity = (productID) => {
    const newProductQuantity = productQuantity.map((prod) => {
      if (prod.id === productID) {
        return { ...prod, quantity: prod.quantity + 1 };
      }
      return prod;
    });
    setProductQuantity(newProductQuantity);
    return;
  };

  //removes one from the product quantity
  const handleRemoveQuantity = (productID) => {
    const newProductQuantity = productQuantity.map((prod) => {
      if (prod.id === productID && prod.quantity > 0) {
        return { ...prod, quantity: prod.quantity - 1 };
      }
      return prod;
    });
    setProductQuantity(newProductQuantity);
    return;
  };

  //adds selected product to cart
  const handleAddToCart = (productID) => {
    const product = productQuantity.find((p) => p.id === productID);
    const quantityToAdd = product  ? product.quantity : 0;

    if (quantityToAdd > 0) {
      const newCartQuantity = cartQuantity.map((item) => {
        if (item.id === productID) {
          return { ...item, quantity: item.quantity + quantityToAdd };
        }
        return item;
      });
      setCartQuantity(newCartQuantity);

      const newProductQuantity = productQuantity.map((prod) => {
        if (prod.id === productID) {
          return { ...prod, quantity: 0 };
        }
        return prod;
      });
      setProductQuantity(newProductQuantity);
    }
  };

  //adds one to the quantity in the cart
  const handleCartAddQuantity = (productID) => {
    const newCartQuantity = cartQuantity.map((item) => {
      if (item.id === productID) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartQuantity(newCartQuantity);
  };
  
  //removes one from the quantity in the cart (won't go below 1)
  const handleCartRemoveQuantity = (productID) => {
    const newCartQuantity = cartQuantity.map((item) => {
      if (item.id === productID && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCartQuantity(newCartQuantity);
  };
  
  //removes product entirely from cart
  const handleRemoveFromCart = (productID) => {
    const newCartQuantity = cartQuantity.map((item) => {
      if (item.id === productID) {
        return { ...item, quantity: 0 };
      }
      return item;
    });
    setCartQuantity(newCartQuantity);
  };
  
  //empties cart
  const handleEmptyCart = () => {
    const newCartQuantity = cartQuantity.map((item) => ({
      ...item,
      quantity: 0,
    }));
    setCartQuantity(newCartQuantity);
  };
  
  //filters out non-cart products
  const cartProducts = data.filter((product) => {
    const cartItem = cartQuantity.find((item) => item.id === product.id);
    return cartItem && cartItem.quantity > 0;
  });
  
  //determines if the cart is empty
  const cartEmpty = cartProducts.length === 0;

  return (
    <div>
      <NavBar 
        //sets cart icon
        icon = {cartEmpty ? emptyCart : fullCart}
      />
      <div className="GroceriesApp-Container">
        <ProductsContainer
          data={data}
          productQuantity={productQuantity}
          handleAddToQuantity={handleAddToQuantity}
          handleRemoveQuantity={handleRemoveQuantity}
          handleAddToCart={handleAddToCart}
        />
        <CartContainer
          data={cartProducts}
          cartQuantity={cartQuantity}
          handleAddToQuantity={handleCartAddQuantity}
          handleRemoveQuantity={handleCartRemoveQuantity}
          handleRemoveFromCart={handleRemoveFromCart}
          handleEmptyCart={handleEmptyCart}
        />
      </div>
    </div>
  );
}
