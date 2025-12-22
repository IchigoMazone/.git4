export const validationForgot = (code: string, username: string): string => {
    const usernameRegex = /^[a-zA-Z0-9._-]{8,20}$/;
    const codeRegex = /^[a-zA-Z0-9]{12}$/;

    if (!username.trim() || !code.trim())
        return "Vui lòng nhập đầy đủ thông tin";
    if (!usernameRegex.test(username) || !codeRegex.test(code))
        return "Mã giới thiệu hoặc tài khoản không chính xác";
    return "";
};
