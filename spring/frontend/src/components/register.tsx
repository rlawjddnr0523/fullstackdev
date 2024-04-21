import React, {useState} from 'react';
import {Button, Form} from 'react-bootstrap';
import Header from "../partComponent/header";
import '../App.css';
import {Link, useNavigate} from "react-router-dom";
import {
    hasRepeatedChars,
    hasSequential,
    passwordHasLetter,
    passwordHasSpecialChars,
    validatePassword
} from "../logic/validatePassword";
import {sendRequest} from "../api/registerRequest";
import checkDuplicateRequest from "../api/checkDuplicateRequest";
import checkDuplicateEmailRequest from "../api/checkDuplicateEmailRequest";
import {BirthFormInputComponent, FormInputComponent} from "../tsxComponent/FormInputComponent";

// 회원가입 컴포넌트 최종 출력 컴포넌트입니다.
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

// 회원가입 폼 컴포넌트입니다.
const RegisterForm = () => {

    // 로그인에 필요한 기본 정보를 저장하는 State 상수
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    // 생년월일 지정하는 State 상수
    const [birthDate, setBirthDate] = useState('');
    const [birthYear, setBirthYear] = useState('');
    const [birthMonth, setBirthMonth] = useState('');
    const [birthDay, setBirthDay] = useState('');

    // api 값 저장하는 State 상수
    const [isIdChecked, setIsIdChecked] = useState(false);

    // `indicators` 사용중인 `State` 상수
    const [pwdAlert, setPwdAlert] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [strengthPassword, setStrengthPassword] = useState('');

    // 페이지 전환을 사용하기 위한 상수(`constant`)
    const navigate = useNavigate();

    // `handleCheckDuplicate` 함수는 중복확인 버튼을 클릭했을때 중복확인을 진행하는 함수입니다.
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

    // `handleSubmit` 함수는 비동기적으로 `회원가입하기` 버튼을 클릭했을때 생기는 이벤트를 다루는 함수입니다.
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // 이메일 중복 체크 로직
        let checkEmailResult = await checkDuplicateEmailRequest(email);
        // `checkEmailResult`의 return 값이 'error' 라면 에러를 반환하는 코드입니다.
        if (checkEmailResult === 'error') {
            console.log('error');
            alert('이메일 중복 체크 중 오류가 발생하였습니다.');
            return 'error-api';
            // `checkEmailResult`의 return 값이 'true' 라면 이미 사용된 이메일 주소이므로 회원가입을 중단시킵니다.
        } else if (checkEmailResult === true) {
            console.log(true);
            alert('이미 사용된 이메일주소입니다. 다른 이메일 주소를 입력해주세요.');
            return;
        }
        // `checkEmailResult`가 모든 조건에 해당하지 않을경우 계속 진행합니다.
        console.log(false);

        // 아이디 중복 확인 체크 로직
        // 아이디 중복 확인 버튼을 클릭하여 중복확인이 진행되지 않은 경우에는 '아이디 중복 확인이 필요합니다'를 반환합니다.
        if (!isIdChecked) {
            alert('아이디 중복 확인이 필요합니다.');
            return;
        }

        // 비밀번호 유효성 검사
        // 비밀번호 유효성 검사를 마지막으로 진행하여 체크합니다. 만일 유효성 검사에서 실패했다면, 회원가입을 중단시킵니다.
        if (!validatePassword(password)) {
            alert('비밀번호를 확인해주시기 바랍니다.');
            return;
        }

        // 본격적 회원가입 요청문
        try {
            // 회원가입 api 요청을 보냅니다.
            const response = await sendRequest(userId, password, email, birthDate);
            // 회원가입 요청중 '에러'를 반환한다면 api 호출중 오류가 발생하였음을 알립니다.
            if (response === 'error') {
                alert('API 호출 중에 오류가 발생하였습니다.');
                return;
            }
            // 회원가입 성공시 처리 과정입니다.
            console.log('요청 성공 : ', response);
            alert('회원가입에 성공하였습니다.');
            navigate('/'); // 성공 시 메인페이지로 리디렉션
            // 회원가입 실패시 처리 과정입니다.
        } catch (error) {
            console.log('요청 실패 : ', error);
            alert('회원가입에 실패하였습니다.');
            navigate('/register'); // 실패 시 리지스터 페이지로 다시 리디렉션
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
                {/* 폼 제출 시 handleSubmit 함수를 호출합니다. */}
                <Form onSubmit={handleSubmit}>
                    {/* 아이디 입력란입니다. */}
                    <FormInputComponent
                        className="login-input"
                        controlId="formBasicUsername"
                        label="*아이디"
                        type="text"
                        placeholder="아이디를 입력해주세요"
                        isUsername={true}
                        onChange={(e) => setUserId(e.target.value)}
                        required={true}
                        handleCheckDuplicate={handleCheckDuplicate}
                        value={userId}
                    />
                    <FormInputComponent
                        className="login-input"
                        controlId="formBasicPassword"
                        label="*비밀번호"
                        type="password"
                        placeholder="영문,숫자,특수문자 포함 8자 이상"
                        isPassword={true}
                        onChange={handlePasswordChange}
                        required={true}
                        pwdAlert={pwdAlert}
                        strengthPassword={strengthPassword}

                    />
                    <FormInputComponent
                        className="login-input"
                        type="password"
                        placeholder="비밀번호를 다시 입력해주세요"
                        onChange={handlePasswordConfirm}
                        required={true}
                        isConfirmPassword={true}
                        controlId="formBasicConfirmPassword"
                        label="*비밀번호 확인"
                        confirmPasswordStatus={confirmPasswordStatus}
                    />
                    <FormInputComponent
                        className="login-input"
                        controlId="formBasicEmail"
                        type="email"
                        placeholder="이메일을 입력해주세요"
                        onChange={(e) => setEmail(e.target.value)}
                        required={true}
                        label="*이메일"
                    />
                    <BirthFormInputComponent
                        controlId="formBasicDate"
                        label="*생년월일"
                        type="number"
                        onChange={(e) => {
                            setBirthYear(e.target.value);
                            setBirthDate(`${e.target.value}-${birthMonth}-${birthDay}`);
                        }}
                        onChange1={(e) => {
                            setBirthMonth(e.target.value);
                            setBirthDate(`${birthYear}-${e.target.value}-${birthDay}`);
                        }}
                        onChange2={(e) => {
                            setBirthDay(e.target.value);
                            setBirthDate(`${birthYear}-${birthMonth}-${e.target.value}`)
                        }}
                    />
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
