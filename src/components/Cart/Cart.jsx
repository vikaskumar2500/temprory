import React from "react";
import classes from "./Cart.module.css"
import Modal from "../UI/Modal";
import { useContext } from 'react';
import CartContext from "../../store/Cart-Context";
import CartItems from "./CartItems";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  return (
    <Modal onClose={props.onClose}>
      <CartItems/>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Purchase</button>}
      </div>
    </Modal>
  );
};

export default Cart;
