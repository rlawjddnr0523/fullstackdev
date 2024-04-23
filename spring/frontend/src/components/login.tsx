import React from 'react';
import {Button, Form} from 'react-bootstrap';
import Header from "../partComponent/header";
import '../App.css';
import {Link, useNavigate} from "react-router-dom";
import Base64 from "crypto-js/enc-base64";
import SHA512 from "crypto-js/sha512";
import {sendLoginRequest} from "../api/loginRequest";

const LoginFinal = () => {
    return (
        <>
            <Header />
            <div className="login-container"> {/* 로그인 폼을 중앙에 배치하기 위한 컨테이너 추가 */}
                {Login()}
            </div>
        </>
    )
}

const Login = () => {
    const [userId, setUserId] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [hashedPassword, setHashedPassword] = React.useState('');

    const navigate = useNavigate();

    const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newPassword = e.target.value;
        setPassword(e.target.value);
        const hashedPassword = Base64.stringify(SHA512(newPassword));
        setHashedPassword(hashedPassword);
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (userId === '' || password === '') {
            alert('공란으로 제출이 불가능합니다.');
            return;
        }
        try {
            const response = await sendLoginRequest(userId, hashedPassword)
            if (response === 400) {
                alert("로그인 요청중에 에러가 발생하였습니다.")
                return;
            } else if (response === 401) {
                alert("로그인에 실패하였습니다. 아이디나 비밀번호를 확인해주세요.")
                return;
            } else if (response === 200) {
                alert("로그인 되었습니다.");
                navigate('/');
                return;
            }
        } catch (e) {
            console.log('request failed!')
            return;
        }
    };

    return (
        <div className="login-form"> {/* 스타일 적용을 위한 클래스 추가 */}
            <div className="content">
                <h2 style={{
                    color: 'white',
                    textAlign: 'center',
                    marginBottom: '20px',
                    fontWeight: 'bold',}}>
                    로그인
                </h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicUserId">
                        <Form.Label style={{color: 'white'}}>아이디</Form.Label>
                        <Form.Control
                            className="login-input"
                            type="text"
                            placeholder="ID를 입력해주세요"
                            value={userId}
                            onChange={(e) => setUserId(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label style={{color: 'white'}}>비밀번호</Form.Label>
                        <Form.Control
                            className="login-input"
                            type="password"
                            placeholder="비밀번호를 입력해주세요"
                            value={password}
                            onChange={handleChangePassword}
                            required
                        />
                    </Form.Group>

                    <div style={{marginBottom: '2vh'}}>
                        <Link to='../register'>회원가입..</Link>
                    </div>

                    <div>
                        <Button variant="primary" type="submit">
                            로그인하기
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
};


export default LoginFinal;