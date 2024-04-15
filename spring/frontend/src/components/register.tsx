import React from 'react';
import {Button, Form, FormGroup} from 'react-bootstrap';
import Header from "../pages/header";
import '../App.css';
import {Link} from "react-router-dom";
import e from "express"; // 스타일 시트 불러오기

const RegisterFinal = () => {
    return (
        <>
            <Header />
            <div className="login-container"> {/* 로그인 폼을 중앙에 배치하기 위한 컨테이너 추가 */}
                {RegisterForm()}
            </div>
        </>
    )
}


const RegisterForm = () => {
    const [userId, setUserId] = React.useState('');
    const [password, setPassword] = React.useState('');

    const passChk = () => {
        if ( password.length > 8 ) {
            console.log('Password length:', password.length);
            return 'no...';
        }
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('User ID:', userId);
        console.log('Password:', password);
    };

    return (
        <div className="register-form"> {/* 스타일 적용을 위한 클래스 추가 */}
            <div className="content">
                <h2 style={{
                    color: 'white',
                    textAlign: 'center',
                    marginBottom: '20px',
                    fontWeight: 'bold',}}>
                    회원가입
                </h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicUserId">
                        <Form.Label style={{color: 'white'}}>*아이디</Form.Label>
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
                        <Form.Label style={{color: 'white'}}>*비밀번호</Form.Label>
                        <Form.Control
                            className="login-input"
                            type="password"
                            placeholder="비밀번호를 입력해주세요"
                            required
                            onChange={passChk}
                        />
                        <Form.Label className='pwdchk'>{passChk()}</Form.Label>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label style={{color: 'white'}}>*비밀번호 확인</Form.Label>
                        <Form.Control
                            className="login-input"
                            type="password"
                            placeholder="비밀번호를 확인해주세요"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <Form.Label></Form.Label>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label style={{color: 'white'}}>이메일</Form.Label>
                        <Form.Control
                            className="login-input"
                            type="email"
                            placeholder='이메일을 입력해주세요'

                        />
                    </Form.Group>

                    <FormGroup className="mb-3" controlId="formBasicDate">
                        <Form.Label style={{color: 'white'}}>*생년월일</Form.Label>
                        <Form.Control
                            className="login-input"
                            type="date"
                            placeholder="생년월일을 입력해주세요"
                            required
                        />
                    </FormGroup>

                    <div style={{marginBottom: '2vh', color: "white", fontWeight: 'bold'}}>
                        *표시는 필수입력란입니다.
                    </div>

                    <div style={{marginBottom: '2vh'}}>
                        <Link to='../login'>로그인..</Link>
                    </div>

                    <div>
                        <Button variant="primary" type="submit">
                            회원가입하기
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
};


export default RegisterFinal;