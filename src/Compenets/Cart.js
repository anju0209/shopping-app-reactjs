import React from "react";
import {
  Button,
  ListGroup,
  ListGroupItem,
  Container,
  CardHeader,
  CardBody,
  Card,
  CardFooter,
  Col,
  Row,
  img,
} from "reactstrap";
import CartItem from "./CartItem";
import emptycart from "../Compenets/emptycart.png";

const Cart = ({ cartItem, removeItem, buyNow }) => {
  let amount = 0;
  cartItem.forEach((item) => {
    amount = parseFloat(amount) + parseFloat(item.productPrice);
  });
  return (
    <Container fluid>
      <br />
      <h1 className="text-black text-center">Your Cart</h1>
      <br />
      <ListGroup>
        {cartItem.map((item) => (
          <ListGroupItem key={item.id} className="mt-2 cartimg">
            <Row className="mt-2 text-center">
              <Col className="mt-4">
                <img height={80} src={item.tinyImage} className="cartimg" />
              </Col>
              <Col className="text-center">
                <div
                  className="text-black text-center mt-3"
                  style={{ fontSize: 18, textTransform: "capitalize" }}
                >
                  {item.productName}
                </div>
                <div className="text-center mt-2" style={{ fontSize: 16 }}>
                  Price: {item.productPrice}
                </div>
                <div className="text-center mt-3 mb-3">
                  <Button
                    className="btn-danger btn-remove"
                    color="white"
                    onClick={() => removeItem(item)}
                  >
                    Remove
                  </Button>
                </div>
              </Col>
            </Row>
          </ListGroupItem>
        ))}
      </ListGroup>
      {/*if everything is empty*/}
      {cartItem.length >= 1 ? (
        <Card className="text-center mt-5 paycard">
          <CardHeader style={{ fontSize: 20, fontWeight: "bold" }}>
            Grand Total
          </CardHeader>
          <CardBody style={{ fontSize: 20 }}>
            Your amount for {cartItem.length} product is Rs.{amount}
          </CardBody>
          <CardFooter>
            <Button className="btn-pay" onClick={buyNow}>
              Pay Now
            </Button>
          </CardFooter>
        </Card>
      ) : (
        <Container className="empty">
          <img
            src={emptycart}
            height="80%"
            width="80%"
            className="text-center mx-5 mt-5"
          />
          <h3 className="text-black text-center">Cart is Empty</h3>
        </Container>
      )}
    </Container>
  );
};

export default Cart;
