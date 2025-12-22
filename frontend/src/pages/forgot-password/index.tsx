import { useEffect, useState, type FormEvent } from "react";
import { validationForgot } from "../../utils/validation_forgot";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./style.css";

interface User {
    code: string;
    username: string;
}

export default function ForgotPassword() {
    const navigate = useNavigate();
    const [user, setUser] = useState<User>({
        code: "",
        username: "",
    });
    const [error, setError] = useState<string>("");

    useEffect(() => {
        const fetchForgot = async () => {
            try {
                await axios.post(
                    "http://localhost:5000/auth/clear-forgot",
                    {},
                    { withCredentials: true }
                );
            } catch {
                setError("Lỗi mất kết nối server");
            }
        };
        fetchForgot();
    }, []);

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const checkForgot = validationForgot(user.code, user.username);

        if (checkForgot === "") {
            try {
                const response = await axios.post(
                    "http://localhost:5000/auth/forgot-password",
                    { ...user }
                );
                try {
                    await axios.post(
                        "http://localhost:5000/auth/request-reset",
                        {},
                        { withCredentials: true }
                    );
                    navigate("/reset-password", {
                        state: { userId: response.data.userid },
                    });
                } catch {
                    setError("Lỗi server mất kết nối...");
                }
            } catch (error: any) {
                setError(
                    error.response?.data?.message || "Lỗi server mất kết nối..."
                );
            }
        } else {
            setError(checkForgot);
            setUser((prev) => ({ ...prev, username: "" }));
        }
    };

    return (
        <div className="forgot__container">
            <div className="forgot__box">
                <div className="box__title">
                    <h3>Quên mật khẩu</h3>
                </div>
                <div className="box__form">
                    <form onSubmit={handleSubmit}>
                        <div className="form__user">
                            <label>Mã giới thiệu</label>
                            <div className="user__content">
                                <i className="fa-solid fa-key"></i>
                                <input
                                    className="user__input"
                                    type="text"
                                    placeholder="Nhập mã xác nhận..."
                                    value={user.code}
                                    onChange={(e) =>
                                        setUser((prev) => ({
                                            ...prev,
                                            code: e.target.value,
                                        }))
                                    }
                                />
                            </div>
                        </div>
                        <div className="form__pass">
                            <label>Tài khoản</label>
                            <div className="pass__content">
                                <i className="fa-solid fa-user"></i>
                                <input
                                    className="pass__input"
                                    type="text"
                                    placeholder="Nhập tài khoản..."
                                    value={user.username}
                                    onChange={(e) =>
                                        setUser((prev) => ({
                                            ...prev,
                                            username: e.target.value,
                                        }))
                                    }
                                />
                            </div>
                        </div>
                        <div className="form__submitt">
                            <button className="submit__buttonn">
                                Xác nhận
                            </button>
                        </div>
                        <div className="form__back">
                            <p>
                                Đã có tài khoản?.{" "}
                                <Link className="link__back" to="/">
                                    Quay lại
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
            <div className="forgot__error">
                <p className="error__line">{error !== "" ? error : ""}</p>
            </div>
        </div>
    );
}
