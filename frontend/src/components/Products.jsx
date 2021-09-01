import React from "react";
import { useEffect, useState, useCallback } from "react";
import { Button, Card, Row, Col } from "react-bootstrap";

const Fetch_URL = "http://localhost:3003";
function Products() {
  const [fetchedProducts, setFetchedProducts] = useState([]);

  const fetchProducts = useCallback(async () => {
    try {
      const response = await fetch(`${Fetch_URL}/products`);
      if (response.ok) {
        console.log(fetchedProducts);
        const data = await response.json();
        setFetchedProducts(data);
      }
    } catch (error) {
      console.log(error);
    }
  }, [setFetchedProducts]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <Row className="test">
      {fetchedProducts.map((p) => {
        return (
          <Col lg={3} md={3} sm={6} xs={6}>
            <Card className="cards">
              <Card>
                <Card.Img variant="top" src="https://picsum.photos/200" />
                <Card.Body>
                  <Card.Title>
                    {p.name}, <span>Category : {p.categoryId}</span>
                  </Card.Title>
                  <Card.Text>Product description coming soon</Card.Text>
                  <Button className="custom-btn">Buy now</Button>
                </Card.Body>
              </Card>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
}

export default Products;
