import React, { useState, useEffect } from "react";
import Axios from "axios";
import { random, commerce } from "faker";
import { Container, Col, Row } from "reactstrap";
import CartItem from "./CartItem";

const apiKey = "API_key"; // if u get a official Pexels API put the authorization APIkey here
const url =
  "https://api.pexels.com/v1/search?query=iphone x&orientation=landscape&per_page=9&page=1~"; // official  Pexels API URL
const localurl = "local_api_link"; // if u dont get the pexels official API host the code in PEXELS.json file online and get a API localy
const BuyPage = ({ addInCart }) => {
  const [product, setProduct] = useState([]);

  const fetchPhotos = async () => {
    const { data } = await Axios.get(url, {
      headers: {
        Authorization: apiKey,
      },
    });
    const { photos } = data;

    const allProduct = photos.map((photo) => ({
      smallImage: photo.src.medium,
      tinyImage: photo.src.tiny,
      productName: random.word(),
      productPrice: commerce.price(),
      id: random.uuid(),
    }));

    setProduct(allProduct);
  };
  // following code is for if you host the API localy use this code

  // const fetchPhotos = async () => {
  //   const { data } = await Axios.get(localUrl, {});

  //   const { photos } = data;

  //   const allProduct = photos.map((photo) => ({
  //     smallImage: photo.src.medium,
  //     tinyImage: photo.src.tiny,
  //     productName: random.word(),
  //     productPrice: commerce.price(),
  //     id: random.uuid(),
  //   }));

  //   setProduct(allProduct);
  // };

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <Container fluid>
      <br />
      <h1 className="text-black text-center">Buy IPhones</h1>
      <Row>
        {product.map((product) => (
          <Col md={4} key={product.id}>
            <CartItem product={product} addInCart={addInCart} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BuyPage;
