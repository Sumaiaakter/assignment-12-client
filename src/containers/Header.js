import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src="https://www.logolynx.com/images/logolynx/0f/0f1bfc8b24b2778c885034ce2001d1cc.jpeg"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        Clothing Store
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;