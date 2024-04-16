function hasSequential(str: string) {
    for (let i = 0; i < str.length - 2; i++) {
        const firstCharCode = str.charCodeAt(i);
        const secondCharCode = str.charCodeAt(i + 1);
        const thirdCharCode = str.charCodeAt(i + 2);

        if (firstCharCode + 1 === secondCharCode && firstCharCode + 2 === thirdCharCode) {
            return false;
        }
    }
    return true;
}
function hasRepeatedChars(str: string) {
    for (let i = 0; i < str.length - 2; i++) {
        const firstCharCode = str.charCodeAt(i);
        const secondCharCode = str.charCodeAt(i + 1);
        const thirdCharCode = str.charCodeAt(i + 2);

        if (firstCharCode === secondCharCode && firstCharCode === thirdCharCode) {
            return false;
        }
    }
    return true;
}
function passwordHasLetter(password: string): boolean {
    const hasLetter = /[a-zA-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    return !(!hasLetter || !hasNumber);
}

function passwordHasSpecialChars(password: string): boolean {
    // 특수문자를 포함하는 정규 표현식
    return !/[ `!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/.test(password);
}
function validatePassword(password: any) {

    // 문자와 숫자가 모두 포함되어있는지 확인
    if (passwordHasLetter(password) && !passwordHasSpecialChars(password)) {
        return true;
    }

    // 3개이상 연속되거나 순서대로 나열된 문자나 숫자가 있는지 확인
    return !hasSequential(password) || !hasRepeatedChars(password);
}

export {
    passwordHasLetter,
    validatePassword,
    passwordHasSpecialChars,
    hasRepeatedChars,
    hasSequential
};