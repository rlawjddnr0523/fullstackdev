import {ProgressBar} from "react-bootstrap";
import React from "react";

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

export { PwdlengthIndicator, PwdstrengthIndicator, ConfirmPwdIndicator };