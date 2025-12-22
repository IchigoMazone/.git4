export const validationReset = (
    password: string,
    confirmPassword: string
): string => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-={}[\]|:;"'<>,.?/]).{8,}$/;

    if (!password.trim() || !confirmPassword.trim()) {
        return "Vui lòng nhập đầy đủ thông tin";
    }
    if (!passwordRegex.test(password) || !passwordRegex.test(confirmPassword)) {
        return "Mật khẩu hoặc nhập lại không chính xác";
    }
    if (password !== confirmPassword) {
        return "Mật khẩu và mật khẩu nhập lại không khớp nhau"
    }
    return "";
};
