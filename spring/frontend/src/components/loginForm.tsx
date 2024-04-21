import React from 'react';
import {Button, Form} from 'react-bootstrap';
import Header from "../partComponent/header";
import '../App.css';
import {Link} from "react-router-dom"; // 스타일 시트 불러오기

const LoginFinal = () => {
    return (
        <>
            <Header />
            <div className="login-container"> {/* 로그인 폼을 중앙에 배치하기 위한 컨테이너 추가 */}
                {LoginForm()}
            </div>
        </>
    )
}

const LoginForm = () => {
    const [userId, setUserId] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('User ID:', userId);
        console.log('Password:', password);
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
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label style={{color: 'white'}}>비밀번호</Form.Label>
                        <Form.Control
                            className="login-input"
                            type="password"
                            placeholder="비밀번호를 입력해주세요"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
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