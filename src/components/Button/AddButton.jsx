import React, {useContext} from 'react';
import CartContext from '../../store/Cart-Context';

const AddButton = (props) => {
	const cartCtx = useContext(CartContext);
  const {item} = props;
  
	const addButtonHandler=(item)=> {
  	cartCtx.addItem({
    	...item,
    })
  }
  return (
    <button className="btn btn-outline-primary" onClick={addButtonHandler.bind(null, item)}>
      Add To Cart
    </button>
  );
};

export default AddButton;