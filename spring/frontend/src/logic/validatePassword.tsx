function hasSequential (str: string) {
    for (let i = 0; i < str.length - 2; i++) {
        const firstCharCode = str.charCodeAt(i);
        const secondCharCode = str.charCodeAt(i + 1);
        const thirdCharCode = str.charCodeAt(i + 2);

        if (firstCharCode + 1 === secondCharCode && secondCharCode + 1 === thirdCharCode) {
            return true;  // 연속되는 문자나 숫자가 있을 때 true 반환
        }
    }
    return false;  // 연속되는 문자나 숫자가 없을 때 false 반환
}

function hasRepeatedChars(str: string) {
    for (let i = 0; i < str.length - 2; i++) {
        if (str[i] === str[i + 1] && str[i] === str[i + 2]) {
            return true;  // 반복되는 문자가 있을 때 true 반환
        }
    }
    return false;  // 반복되는 문자가 없을 때 false 반환
}

function passwordHasLetter(password: string): boolean {
    const hasLetter = /[a-zA-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    return hasLetter && hasNumber;  // 문자와 숫자가 모두 포함되어야 true 반환
}

function passwordHasSpecialChars(password: string): boolean {
    // 특수문자를 포함하면 true 반환
    return /[ `!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/.test(password);
}

function validatePassword(password: string) {
    // 문자와 숫자가 모두 포함되어있는지 확인
    if (!passwordHasLetter(password)) {
        return false;
    }

    // 특수 문자를 포함해야 함
    if (!passwordHasSpecialChars(password)) {
        return false;
    }

    // 3개 이상 연속되거나 순서대로 나열된 문자나 숫자가 없어야 함
    if (hasSequential(password) || hasRepeatedChars(password)) {
        return false;
    }

    // 위의 모든 조건을 만족하면 비밀번호는 유효함
    return true;
}

export {
    passwordHasLetter,
    hasSequential,
    validatePassword,
    hasRepeatedChars,
    passwordHasSpecialChars
};