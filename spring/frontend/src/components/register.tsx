import React, { useState } from 'react';
import {Button, Form, FormGroup} from 'react-bootstrap';
import Header from "../pages/header";
import '../App.css';
import { Link } from "react-router-dom";
import {
    hasRepeatedChars,
    hasSequential,
    passwordHasLetter,
    passwordHasSpecialChars,
    validatePassword
} from "../logic/validatePassword";
import {
    PwdlengthIndicator,
    PwdstrengthIndicator,
    ConfirmPwdIndicator
} from "../logic/passwordIndicators";

const RegisterFinal = () => {
    return (
        <>
            <Header />
            <div className="login-container">
                <RegisterForm />
            </div>
        </>
    )
}
const RegisterForm = () => {
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [strengthPassword, setStrengthPassword] = useState('');
    const [pwdAlert, setPwdAlert] = useState('');
    const [isIdChecked, setIsIdChecked] = useState(false);

    const handleCheckDuplicate = () => {
        // handle Logic on here
        alert('중복확인을 진행합니다.');
        setIsIdChecked(true);
        console.log(isIdChecked);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newPassword = event.target.value;
        setPassword(newPassword);
        if (newPassword.length > 8) {
            setPwdAlert('강함');
        } else if (newPassword.length > 4) {
            setPwdAlert('보통');
        } else if (newPassword.length >= 0) {
            setPwdAlert('약함');
        }
        if (hasSequential(newPassword)) {
            setStrengthPassword('error1');
        } if (hasRepeatedChars(newPassword)) {
            setStrengthPassword('error2');
        } if (!passwordHasLetter(newPassword)) {
            setStrengthPassword('error3');
        } if (passwordHasSpecialChars(newPassword)) {
            setStrengthPassword('error4');
        } if (validatePassword(newPassword)) {
            setStrengthPassword('no-error');
        }
    };

    const handlePasswordConfirm = (event: React.ChangeEvent<HTMLInputElement>) => {
        const currentConfirmPassword = event.target.value;
        setConfirmPassword(currentConfirmPassword);
    };
    // `confirmPasswordStatus`를 추가하여 상태에 따라 '확인됨' 또는 '다름'을 결정합니다.
    const confirmPasswordStatus = password === confirmPassword ? '확인됨' : '다름';
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!isIdChecked) {
            alert('아이디 중복 확인이 필요합니다.');
            return;
        }
        // if (!validatePassword(password)) {
        //     alert('비밀번호의 형식을 지켜주세요!');
        //     return;
        // }
    };
    return (
        <div className="register-form">
            <div className="content">
                <h2 style={{
                    color: 'white',
                    textAlign: 'center',
                    marginBottom: '20px',
                    fontWeight: 'bold',
                }}>
                    회원가입
                </h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicUserId">
                        <Form.Label style={{ color: 'white' }}>*아이디</Form.Label>
                        <div className='id-check-container'>
                            <Form.Control
                                className="login-input"
                                type="text"
                                placeholder="ID를 입력해주세요"
                                value={userId}
                                onChange={(e) => setUserId(e.target.value)}
                                required
                            />
                            <Button variant="primary" onClick={handleCheckDuplicate} className='mt-2'>
                                중복 확인
                            </Button>
                        </div>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label style={{ color: 'white' }}>*비밀번호</Form.Label>
                        <Form.Control
                            className="login-input"
                            type="password"
                            placeholder="영문,숫자,특수문자 포함 8자 이상"
                            required
                            onChange={handlePasswordChange}
                        />
                        <PwdlengthIndicator pwdAlert={pwdAlert} />
                        <PwdstrengthIndicator strengthPassword={strengthPassword} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                        <Form.Label style={{ color: 'white' }}>*비밀번호 확인</Form.Label>
                        <Form.Control
                            className="login-input"
                            type="password"
                            placeholder="비밀번호를 다시입력해주세요"
                            onChange={handlePasswordConfirm}
                            required
                        />
                        <ConfirmPwdIndicator confirmPassword={confirmPasswordStatus} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label style={{ color: 'white' }}>이메일</Form.Label>
                        <Form.Control
                            className="login-input"
                            type="email"
                            placeholder='이메일을 입력해주세요'
                        />
                    </Form.Group>
                    <FormGroup className="mb-3" controlId="formBasicDate">
                        <Form.Label style={{ color: 'white' }}>*생년월일</Form.Label>
                        <Form.Control
                            className="login-input"
                            type="date"
                            placeholder="생년월일을 입력해주세요"
                            required
                        />
                    </FormGroup>
                    <div style={{ marginBottom: '2vh', color: "white", fontWeight: 'bold' }}>
                        *표시는 필수입력란입니다.
                    </div>
                    <div style={{ marginBottom: '2vh' }}>
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
