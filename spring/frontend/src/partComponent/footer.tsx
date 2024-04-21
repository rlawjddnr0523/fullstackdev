import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

function Footer() {
    return(
        <div className=''>
            <Container className='bg-dark-subtle p-3' data-bs-theme='dark'>
                <Row className='filt-blur'>
                    <Col className='fs-4 fw-bold'>
                        <Link to='/' className='non-blur-txt'>
                            TwoPP.service
                        </Link>
                    </Col>
                </Row>
                <Row className='filt-blur'>
                    <Col className='fw-bold non-blur-txt'>Contact</Col>
                    <Col className='fw-bold non-blur-txt'>Menu</Col>
                    <Col className='fw-bold non-blur-txt'></Col>
                </Row>
                <Row>
                    <Col className='fw-lighter non-blur-txt'>test</Col>
                    <Col className='fw-lighter non-blur-txt'>test</Col>
                    <Col className='fw-lighter non-blur-txt'></Col>
                </Row>
            </Container>
        </div>
    )
} export default Footer;