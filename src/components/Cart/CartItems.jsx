import React, {useContext} from "react";
import CartContext from "../../store/Cart-Context";
import CartItem from "./CartItem";
import classes from './CartItems.module.css';

const CartItems =()=> {
  const cartCtx = useContext(CartContext);
  return (<ul className={classes['cart-items']}>
    {cartCtx.items.map((item) => (
      <CartItem
        key={item.id}
        name={item.name}
        amount={item.amount}
        price={item.price}
        id = {item.id}
        item = {item}
      />
    ))}
  </ul>)
}

export default CartItems;