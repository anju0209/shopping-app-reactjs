import React from "react";
import {
  Card,
  CardBody,
  CardText,
  CardImg,
  CardTitle,
  Button,
} from "reactstrap";

const CartItem = ({ product, addInCart }) => {
  return (
    <Card className="mt-5 mb-1 ms-3 card">
      <CardImg className="img" src={product.smallImage} height={185} />
      <CardBody className="text-center">
        <CardTitle
          style={{
            fontSize: 20,
            fontWeight: "bold",
            textTransform: "capitalize",
          }}
        >
          {product.productName}
        </CardTitle>
        <CardText className="secondary" style={{ fontSize: 15 }}>
          Rs.{product.productPrice}
        </CardText>
        <Button
          className="btn-round"
          color="white"
          onClick={() => addInCart(product)}
        >
          Add To Cart
        </Button>
      </CardBody>
    </Card>
  );
};

export default CartItem;
