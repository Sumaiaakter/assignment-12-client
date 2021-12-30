import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);
    // const { id, title } = products[0];
    return (
        <div className='container'>
            <h2>All Product </h2>
            <Container>
                <Row>


                    {
                        products.map(product =>
                            <Col md={4} sm={12}>
                                <Card className='mb-5' style={{ height: '700px' }} >
                                    <Card.Img
                                        style={{ height: '18rem' }}
                                        className='p-3' variant="top" src={product.image} />
                                    <Card.Body>
                                        <Card.Title> {product.title}</Card.Title>
                                        <Card.Text>
                                            {product.category}
                                        </Card.Text>
                                        <Card.Text>
                                            {product.price}
                                        </Card.Text>
                                        <Card.Text>
                                            {product.description.slice(0, 200)}
                                        </Card.Text>

                                    </Card.Body>
                                    <Link
                                        style={{ textDecoration: 'none', border: "1px solid blue", borderRadius: "5px" }} className='m-1 bg-primary text-white p-2 ' to={`/product/${product.id}`}>Details</Link>
                                </Card>
                            </Col>
                        )

                    }





                </Row>
            </Container>
        </div>
    );
};

export default ProductComponent;