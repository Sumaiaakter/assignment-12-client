import React, { useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectedProduct, removeSelectedProduct } from '../redux/actions/productActions';
import { useSelector } from 'react-redux';
import { Card, Col, Container } from 'react-bootstrap';

const ProductDetail = () => {
    const product = useSelector((state) => state.product)
    const { productId } = useParams();
    const dispatch = useDispatch();
    console.log(product)


    const fetchProductDetail = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch((err) => console.log("got error", err));
        dispatch(selectedProduct(response.data));


    };

    useEffect(() => {
        if (productId && productId !== "") fetchProductDetail();
        return () => {
            dispatch(removeSelectedProduct())
        }
    }, [productId]);


    return (
        <div>
            <h2>Product Details</h2>
            {
                Object.keys(product).length === 0 ? (<div>...Loading</div>) : (
                    <Container >
                        <Col>
                            <Card className='mb-5' style={{ width: "400px", height: '700px', justifyContent: "center", textAlign: "center" }} >
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
                                        {product.description}
                                    </Card.Text>

                                </Card.Body>
                                <Link
                                    style={{ textDecoration: 'none', border: "1px solid blue", borderRadius: "5px" }} className='m-2 bg-primary text-white p-2 ' to={`/product/${product.id}`}>ADD TO CART</Link>
                            </Card>
                        </Col>
                    </Container>
                )
            }

        </div>
    );
};

export default ProductDetail;