import React from 'react';
import {Form, Button, ProgressBar} from 'react-bootstrap';
import classNames from "classnames";

interface FormInputProps {

    className?: string;

    confirmPasswordStatus?: any;

    controlId?: string;

    handleCheckDuplicate?: () => void;

    isConfirmPassword?: boolean;
    // 비밀번호 입력란인 경우 true
    isPassword?: boolean;
    // 유저네임 입력란인 경우 true
    isUsername?: boolean;

    isBirthDate?: boolean;

    isBirthDateYear?: boolean;

    isBirthDateMonth?: boolean;

    isBirthDateDay?: boolean;

    label?: string;

    max?: number;

    min?: number;
    // 중복 확인 버튼 클릭 핸들러, 옵셔널
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;

    onChange1?: (e: React.ChangeEvent<HTMLInputElement>) => void;

    onChange2?: (e: React.ChangeEvent<HTMLInputElement>) => void;

    placeholder?: string;

    pwdAlert?: any;

    required?: boolean;

    strengthPassword?: any;

    type: string;

    value?: string;
}

const FormInputComponent: React.FC<FormInputProps> = ({
    controlId,
    label,
    type,
    placeholder,
    onChange,
    required = false,
    value,
    isPassword = false,
    isUsername = false,
    isConfirmPassword = false,
    handleCheckDuplicate,
    className,
    pwdAlert,
    strengthPassword,
    confirmPasswordStatus,
}) => {
    return (
        <>
        <Form.Group className="mb-3" controlId={controlId}>
            <Form.Label style={{ color: 'white' }}>{label}</Form.Label>
            <div className={classNames({
                'username': isUsername,
                'password': isPassword,
                'confirmPassword': isConfirmPassword,
            })}>
                <Form.Control
                    className={className}
                    type={type}
                    placeholder={placeholder}
                    onChange={onChange}
                    required={required}
                    value={value}
                />
                {isUsername && (
                    <Button variant="primary" onClick={handleCheckDuplicate} className='mt-2'>
                        중복 확인
                    </Button>
                )}
                {isPassword && (
                    <>
                        <PwdlengthIndicator pwdAlert={pwdAlert} />
                        <PwdstrengthIndicator strengthPassword={strengthPassword} />
                    </>
                )}
                {isConfirmPassword && (
                    <>
                        <ConfirmPwdIndicator confirmPassword={confirmPasswordStatus} />
                    </>
                )}
            </div>
        </Form.Group>
        </>
    );
};

const BirthFormInputComponent: React.FC<FormInputProps> = ({
    controlId,
    label,
    type,
    onChange,
    onChange1,
    onChange2,
}) => {
    return (
        <Form.Group className="mb-3" controlId={controlId}>
            <Form.Label style={{ color: 'white' }}>{label}</Form.Label>
            <div style={{display: "flex"}}>
                <Form.Group className="mb-3" controlId="formBasicDateYear">
                    <Form.Control
                        className="login-year-input"
                        type={type}
                        placeholder='YYYY'
                        min={1900} max={2024}
                        onChange={onChange}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicDateMonth">
                    <Form.Control
                        className="login-date-input"
                        type={type}
                        placeholder='MM'
                        min={1} max={12}
                        onChange={onChange1}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicDateDay">
                    <Form.Control
                        className="login-date-input"
                        type={type}
                        placeholder='DD'
                        min={1} max={31}
                        onChange={onChange2}
                        required
                    />
                </Form.Group>
            </div>
            <Form.Label style={{ color: 'red' }}>*YYYY-MM-DD 형식을 따라서 입력해주세요!</Form.Label>
        </Form.Group>
)};

const PwdlengthIndicator = ({ pwdAlert }: { pwdAlert: string }) => {
    let variant: 'success' | 'warning' | 'danger' = 'danger';
    let strengthText = '약함';
    let progress = 0;
    let barColor = '';

    if (pwdAlert === '강함') {
        variant = 'success';
        strengthText = '강함';
        progress = 100;
        barColor = '#008000'; // 강함일 때의 색상
    } else if (pwdAlert === '보통') {
        variant = 'warning';
        strengthText = '보통';
        progress = 50;
        barColor = '#ffff00'; // 보통일 때의 색상
    } else if (pwdAlert === '약함') {
        variant = 'danger';
        strengthText = '약함';
        progress = 10;
        barColor = '#ff0000';
    }

    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <ProgressBar
                now={progress}
                label={strengthText}
                variant={variant}
                style={{ flexGrow: 1, backgroundColor: barColor }}
                className='m-2'
            />
        </div>
    );
};

const PwdstrengthIndicator = ({ strengthPassword }: { strengthPassword: string }) => {
    let variant: 'success' | 'danger' = 'success';
    let strengthText = '문제없음';
    let progress = 100;
    let barColor = '#008000';

    if (strengthPassword === 'error1') {
        variant = 'danger';
        strengthText = '비밀번호에 순차적인 문자나 숫자를 3개 이상 사용할 수 없습니다';
        progress = 100;
        barColor = '#ff0000';
    } if (strengthPassword === 'error2') {
        variant = 'danger';
        strengthText = '비밀번호에 동일한 문자나 숫자를 3개 이상 반복 할 수 없습니다';
        progress = 100;
        barColor = '#ff0000';
    } if (strengthPassword === 'error3') {
        variant = 'danger';
        strengthText = '비밀번호에 문자와 숫자를 하나 이상 포함해야합니다';
        progress = 100;
        barColor = '#ff0000';
    } if (strengthPassword === 'error4') {
        variant = 'danger';
        strengthText = '비밀번호에 특수문자를 적어도 하나 이상 포함해야합니다.';
        progress = 100;
        barColor = '#ff0000';
    } if (strengthPassword === 'no-error') {
        variant = 'success';
        strengthText = '문제없음';
        progress = 100;
        barColor = '#008000';
    }

    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <ProgressBar
                now={progress}
                label={strengthText}
                variant={variant}
                style={{ flexGrow: 1, backgroundColor: barColor }}
                className='m-2'
            />
        </div>
    );
};

const ConfirmPwdIndicator = ({ confirmPassword }: { confirmPassword: string }) => {
    let variant : 'success' | 'danger' = 'danger';
    let statusConfirm = '다름';
    let progressConfirm = 0;
    let barColor = '';

    if (confirmPassword === '확인됨') {
        variant = 'success';
        statusConfirm = '확인됨';
        progressConfirm = 100;
        barColor = '#008000';
    } else if (confirmPassword === '다름') {
        variant = 'danger';
        statusConfirm = '다름';
        progressConfirm = 50;
        barColor = '#ff0000';
    }
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <ProgressBar
                now={progressConfirm}
                label={statusConfirm}
                variant={variant}
                style={{ flexGrow: 1, backgroundColor: barColor }}
                className='m-2'
            />
        </div>
    )
};

export {
    FormInputComponent,
    BirthFormInputComponent,
};