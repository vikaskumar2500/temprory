import React, { useContext } from "react";
import classes from "./HeaderCartButton.module.css";
import Button from "react-bootstrap/Button";
import CartContext from "../../store/Cart-Context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  
  const toggleCartModal = () => {
    cartCtx.setIsCartModalOpen((prevState) => !prevState);
  };

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <Button
      variant="outline-info"
      className="px-3"
      onClick={() => {
        props.onClick();
        toggleCartModal();
      }}
    >
      <span className={classes.sup}>Cart</span>
      <span className={classes.sup}>{numberOfCartItems}</span>
    </Button>
  );
};

export default HeaderCartButton;
