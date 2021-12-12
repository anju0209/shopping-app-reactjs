import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import { Container, Row, Col } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import BuyPage from "./Compenets/BuyPage";
import Cart from "./Compenets/Cart";
import thanks from "./Compenets/thanks.png";
function App() {
  const [cartItem, setCartItem] = useState([]);

  const addInCart = (item) => {
    const isAlreadyAdded = cartItem.findIndex(function (array) {
      return array.id === item.id;
    });
    if (isAlreadyAdded !== -1) {
      toast("Already added in cart", {
        type: "error",
        position: "bottom-right",
      });
      return;
    }
    setCartItem([...cartItem, item]);
  };

  const buyNow = () => {
    setCartItem([]);
    toast("Purchase Complete", {
      type: "success",
      position: "bottom-right",
    });
    // return (
    //   <Container>
    //     <img src={thanks} height="25%" width="25%" />
    //   </Container>
    // );
  };

  const removeItem = (item) => {
    setCartItem(cartItem.filter((singleItem) => singleItem.id !== item.id));
  };

  return (
    <Container fluid>
      <ToastContainer className="mt-5" />
      <Row>
        <Col md="9">
          <BuyPage addInCart={addInCart} />
        </Col>
        <Col md="3">
          <Cart cartItem={cartItem} removeItem={removeItem} buyNow={buyNow} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
