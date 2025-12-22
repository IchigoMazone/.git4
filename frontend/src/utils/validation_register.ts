
export const validationRegister = (user: object): string => {
    const codeRegex = /^[a-zA-Z0-9]{12}$/;
    const userRegex = /^[a-zA-Z0-9._-]{8,20}$/;
    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-={}[\]|:;"'<>,.?/]).{8,}$/;

    if (!user.code.trim() || !user.username.trim() || !user.password.trim() || !user.confirm) {
        return "Vui lòng nhập đầy đủ các thông tin";
    }
    if (!codeRegex.test(user.code)) {
        return "Mã giới thiệu không đúng định dạng"
    }
    if (!userRegex.test(user.username)) {
        return "Tài khoản không đúng định dạng"
    }
    if (!passRegex.test(user.password)) {
        return "Mật khẩu không đúng định dạng"
    }
    if (!passRegex.test(user.confirm)) {
        return "Mật khẩu nhập lại không đúng định dạng"
    }
    if (user.password !== user.confirm) {
        return "Mật khẩu và mật khẩu nhập lại không khớp"
    }
    return "";
};