import classes from './CartItem.module.css';
import CartContext from '../../store/Cart-Context';
import { useContext } from 'react';


const CartItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;
  // console.log(props)
  const removeButtonHandler=()=> {
    cartCtx.removeItem(props.id);
  }
  const addButtonHandler=()=> {
    cartCtx.addItem(props.item);
  }
  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x{props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={removeButtonHandler}>-</button>
        <button onClick={addButtonHandler}>+</button>
      </div>
    </li>
  );
};

export default CartItem;