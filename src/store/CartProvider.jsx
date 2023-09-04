import React from "react";
import { useReducer, useState } from "react";
import CartContext from "./Cart-Context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  // console.log("reducer running");
  if (action.type === "ADD") {
    
    let updatedItems = state.items;;
    const findItem = state.items.find(
      (item) => item.id === action.item.id
    );
    if (findItem) {
      findItem.amount += 1;
    } else updatedItems = [...state.items, action.item];

    return {
      items: updatedItems,
      totalAmount: state.totalAmount + action.item.price,
    };
  }
  else if(action.type==='REMOVE') {
    let updatedItems = state.items;
    const findItem = state.items.find(
      (item) => item.id === action.id
    );
    if(findItem.amount===1) {
      updatedItems = state.items.filter(item=> item.id!==action.id);
    }
    else {
      findItem.amount -= 1;
    }
    return {
      items:updatedItems,
      totalAmount:state.totalAmount - findItem.price,
    }
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState,
  );

  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  console.log(cartState);

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
    setIsCartModalOpen(true);
  };
  const removeItemFromHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromHandler,
    isCartModalOpen: isCartModalOpen,
    setIsCartModalOpen: setIsCartModalOpen,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
