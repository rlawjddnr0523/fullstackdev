import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link, NavLink} from "react-router-dom";
// @ts-ignore
function Navigation() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
            <Container className=''>
                <Navbar.Brand><Link to='/' className="text-light-emphasis fw-bold">TwoPP</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav variant='underline' className="me-auto justify-content-end">
                        <NavLink to='/' data-bs-theme='dark' className='text-light-emphasis nav-link'>메인</NavLink>
                        <NavLink to='/post' data-bs-theme='dark' className='text-light-emphasis nav-link'>게시물</NavLink>
                        <NavLink to='/status' data-bs-theme='dark' className='text-light-emphasis nav-link'>서비스상태</NavLink>
                        <NavLink to='/login' data-bs-theme='dark' className='text-light-emphasis nav-link'>로그인</NavLink>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className='justify-content-end'>
                    <Navbar.Text>
                        {/*not-thing*/}
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;