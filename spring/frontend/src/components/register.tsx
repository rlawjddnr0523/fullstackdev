import React, {useState} from 'react';
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
import {sendRequest} from "../api/registerRequest";
import checkDuplicateRequest from "../api/checkDuplicateRequest";

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
    const [email, setEmail] = useState('');
    const [birthDate, setBirthDate] = useState('');


    // `handleCheckDuplicate` 함수는 중복확인 버튼을 클릭했을때 중복확인을 진행하는 함수입니다. (미완성)
    const handleCheckDuplicate = async () => {
        const check = await checkDuplicateRequest(userId);
        if (check === true) {
            alert('이미 존재하는 아이디입니다.');
            return;
        } else if (check === false) {
            setIsIdChecked(true);
            alert('사용 가능한 아이디입니다.');
        }
    };

    // `handlePasswordChange` 함수는 비밀번호를 입력 받을 때 마다 업데이트되어 `passwordIndicator`의 상태를 결정합니다.
    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newPassword = event.target.value;
        setPassword(newPassword);

        // 비밀번호 강도 초기값 설정
        let pwdAlertStatus = '약함';
        let strengthStatus = '';

        if (newPassword.length > 8) {
            pwdAlertStatus = '강함';
        } else if (newPassword.length > 4) {
            pwdAlertStatus = '보통';
        }

        // 비밀번호 조건 검사
        if (hasSequential(newPassword)) {
            strengthStatus = 'error1';
        } else if (hasRepeatedChars(newPassword)) {
            strengthStatus = 'error2';
        } else if (!passwordHasLetter(newPassword)) {
            strengthStatus = 'error3';
        } else if (!passwordHasSpecialChars(newPassword)) {
            strengthStatus = 'error4';
        } else if (validatePassword(newPassword)) {
            strengthStatus = 'no-error';
        }

        // 상태 업데이트
        setPwdAlert(pwdAlertStatus);
        setStrengthPassword(strengthStatus);
    };

    // `handlePasswordConfirm` 함수는 비밀번호 확인란에 비밀번호를 입력했을 때 위에 입력한 비밀번호 필드에 있는 비밀번호와 비밀번호확인란의 값을 대조해서 `confirmPasswordStatus`의 상태를 결정합니다.
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
        } else if (!validatePassword(password)) {
            alert('비밀번호를 확인해주시기 바랍니다.');
            return;
        } else {
            sendRequest(userId, password, email, new Date(birthDate)).then(response => {
                console.log('요청 성공 : ', response);
            }).catch(error => {
                console.log('요청 실패 : ',error);
            })
        }
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
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='이메일을 입력해주세요'
                        />
                    </Form.Group>
                    <FormGroup className="mb-3" controlId="formBasicDate">
                        <Form.Label style={{ color: 'white' }}>*생년월일</Form.Label>
                        <Form.Control
                            className="login-input"
                            type="date"
                            placeholder="생년월일을 입력해주세요"
                            onChange={(e) => setBirthDate(e.target.value)}
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
