import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import HeaderCartButton from "../Button/HeaderCartButton";
import "./Header.css";
// import { useContext } from "react";
// import CartContext from "../../store/Cart-Context";
// import Modal from "../UI/Modal";

const Header = (props) => {
//   const cartCtx = useContext(CartContext);

  // const showCartHandler = () => {
  //   cartCtx.setIsCartModalOpen(true);
  // };
  
  return (
    
    <React.Fragment>
      <Navbar
        className="bg-body-tertiary py-1"
        bg="dark"
        data-bs-theme="dark"
        sticky="top"
      >
        <Container>
          <Nav className="mx-auto responsive">
            <Nav.Link style={{ color: "white" }} href="#home" className="px-5">
              HOME
            </Nav.Link>
            <Nav.Link style={{ color: "white" }} href="#store" className="px-5">
              STORE
            </Nav.Link>
            <Nav.Link style={{ color: "white" }} href="#about" className="px-5">
              ABOUT
            </Nav.Link>
          </Nav>
          <HeaderCartButton onClick={props.onShowCart} />
        </Container>
      </Navbar>
      <h2 className="head">The Generics</h2>
      {/* <Modal /> */}
    </React.Fragment>
  );
};

export default Header;
