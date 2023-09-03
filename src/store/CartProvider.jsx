import React from "react";
import { useReducer , useState } from "react";
import CartContext from "./Cart-Context";


const defaultCartState = {
    items: [],
    totalAmount: 0,
  };
  
  const cartReducer = (state, action) => {
    if (action.type === "ADD") {
    	// action.item:- id, name, ...;
      // search Item : present or not?
      const findItem = state.items.find(item=> item.id===action.item.id);
      if(findItem) {
      	findItem.amount += 1;
        findItem.price += action.item.price;
        return {
        	items:state.items,
					totalAmount :state.totalAmount + action.item.price * action.item.amount
        }
      }
      else {
      	return {
        	items:[action.item, ...state.items],
          totalAmount :state.totalAmount + action.item.price * action.item.amount
        }
      }
      
    }
    return defaultCartState;
  };
  
  const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(
      cartReducer,
      defaultCartState
    );
  
    const [isCartModalOpen, setIsCartModalOpen] = useState(false); 
    // console.log(cartState);
  
    const addItemToCartHandler = (item) => {
      dispatchCartAction({ type: "ADD", item: item });
      setIsCartModalOpen(true);
    };
  const removeItemFromHandler = (id) => {
    dispatchCartAction({type: 'REMOVE' , id: id})
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
