import { useEffect, useState, type FormEvent } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { validationReset } from "../../utils/validation_reset";
import axios from "axios";
import "./style.css";

interface User {
    password: string;
    confirmPassword: string;
}

export default function ResetPassword() {
    const navigate = useNavigate();
    const { state } = useLocation();
    const [username, setUserName] = useState<string>("");
    const [user, setUser] = useState<User>({
        password: "",
        confirmPassword: "",
    });
    const [error, setError] = useState<string>("");
    const [active_pass, setActivePass] = useState<boolean>(false);
    const [active_conf, setActiveConf] = useState<boolean>(false);

    useEffect(() => {
        const fetchReset = async () => {
            try {
                const response = await axios.post(
                    "http://localhost:5000/auth/user-id",
                    {
                        userid: state.userId,
                    }
                );
                setUserName(response.data.username);
            } catch (error: any) {
                setError(
                    error.response?.data?.message || "Lỗi mất kết nối server..."
                );
            }
        };
        fetchReset();
    }, []);

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const checkReset = validationReset(user.password, user.confirmPassword);

        if (checkReset === "") {
            try {
                const response = await axios.post(
                    "http://localhost:5000/auth/reset-password",
                    {
                        username: username,
                        password: user.password,
                    }
                );

                setError(response.data.success);
                navigate("/");
            } catch (error: any) {
                setError(
                    error.response?.data?.message ||
                        "Lỗi mất kết nối  server..."
                );
            }
        } else {
            setError(checkReset);
        }
    };

    return (
        <div className="forgot__container">
            <div className="forgot__box">
                <div className="box__title">
                    <h3>Đổi mật khẩu</h3>
                </div>
                <div className="box__form">
                    <form onSubmit={handleSubmit}>
                        <div className="form__user">
                            <label>Mật khẩu</label>
                            <div className="user__content">
                                <i className="fa-solid fa-lock-open"></i>
                                <input
                                    className="user__input"
                                    type={active_pass ? "text" : "password"}
                                    placeholder="Nhập mật khẩu..."
                                    value={user.password}
                                    onChange={(e) =>
                                        setUser((prev) => ({
                                            ...prev,
                                            password: e.target.value,
                                        }))
                                    }
                                />
                                <button
                                    className=""
                                    type="button"
                                    onClick={() =>
                                        setActivePass((prev) => !prev)
                                    }
                                >
                                    {active_pass ? (
                                        <i className="fas fa-eye-slash"></i>
                                    ) : (
                                        <i className="fas fa-eye"></i>
                                    )}
                                </button>
                            </div>
                        </div>
                        <div className="form__pass">
                            <label>Xác nhận mật khẩu</label>
                            <div className="pass__content">
                                <i className="fa-solid fa-lock"></i>
                                <input
                                    className="pass__input"
                                    type={active_conf ? "text" : "password"}
                                    placeholder="Nhập xác nhận mật khẩu..."
                                    value={user.confirmPassword}
                                    onChange={(e) =>
                                        setUser((prev) => ({
                                            ...prev,
                                            confirmPassword: e.target.value,
                                        }))
                                    }
                                />
                                <button
                                    className=""
                                    type="button"
                                    onClick={() =>
                                        setActiveConf((prev) => !prev)
                                    }
                                >
                                    {active_conf ? (
                                        <i className="fas fa-eye-slash"></i>
                                    ) : (
                                        <i className="fas fa-eye"></i>
                                    )}
                                </button>
                            </div>
                        </div>
                        <div className="form__submitt">
                            <button className="submit__buttonn">
                                Xác nhận
                            </button>
                        </div>
                        <div className="form__back">
                            <p>
                                Đã có tài khoản{" "}
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
