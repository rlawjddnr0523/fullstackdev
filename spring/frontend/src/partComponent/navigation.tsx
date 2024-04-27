import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link, NavLink, useNavigate} from "react-router-dom";
import React, {useEffect} from "react";
import {checkSessionRequest} from "../api/checkSession";
import {sendLogoutRequest} from "../api/logoutReqest";

function Navigation() {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            const response = await sendLogoutRequest();
            console.log(response)
            if (response === 200) {
                alert('로그아웃 되었습니다.');
                setIsLoggedIn(false);
                navigate('/');
            } else if (response === 404) {
                alert('로그인이 되어있지 않습니다.');
            } else if (response === 400) {
                alert('로그아웃에 실패하였습니다.');
            }
        } catch (e) {
            console.log('request failed!');
        }
    }

    useEffect(() => {
        async function checkSession() {
            try {
                const response = await checkSessionRequest();
                console.log(response)
                if (response === true) {
                    setIsLoggedIn(true);
                    console.log('콘솔로그')
                } else if (response === 'error') {
                    console.log('error! : bad request 400 on ://localhost:8080/');
                }
            } catch (e) {
                console.log('error while requesting session :', e);
            }
        }
        checkSession();
    }, []); // 의존성 배열을 빈 배열로 설정하여 컴포넌트 마운트 시 한 번만 실행됩니다.

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
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className='justify-content-end'>
                <Navbar.Text>
                    {isLoggedIn ? (
                        <Nav variant='underline'>
                            <NavLink to="/myinfo" data-bs-theme='dark'>프로필</NavLink>
                            <label style={{ cursor: 'pointer' }} data-bs-theme='dark' onClick={handleLogout}>로그아웃</label>
                        </Nav>
                    ) : (
                        <Nav variant='underline'>
                            <NavLink to='/login' data-bs-theme='dark'>로그인</NavLink>
                            <NavLink to='/register' data-bs-theme='dark'>회원가입</NavLink>
                        </Nav>
                    )}
                </Navbar.Text>
            </Navbar.Collapse>
        </Container>
</Navbar>
);
}

export default Navigation;

