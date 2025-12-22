import classNames from "classnames/bind";
import styles from "./dropdown.module.css";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { clearToken } from "../../../../utils/accessToken";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const cx = classNames.bind(styles);

interface Menu {
    info: boolean,
    add: boolean,
    search: boolean,
    setup: boolean,
    help: boolean,
    logout: boolean;
}

export default function DropDown({ onClose, buttonRef }) {
    const wrapperRef = useRef(null);
    const navigate = useNavigate();
    const [menu, setMenu] = useState<Menu>({
        info: false,
        add: false,
        search: false,
        setup: false,
        help: false,
        logout: false,
    });

    useEffect(() => {
        const handleClickOutSide = (e) => {
            if (
                wrapperRef.current &&
                !wrapperRef.current.contains(e.target) &&
                buttonRef.current &&
                !buttonRef.current.contains(e.target)
            ) {
                onClose();
            }
        };

        document.addEventListener("mousedown", handleClickOutSide);

        return () => {
            document.removeEventListener("mousedown", handleClickOutSide);
        };
    }, [onClose, buttonRef]);

    const handleLogout = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            axios.post(
                "http://localhost:5000/auth/logout",
                {},
                { withCredentials: true }
            );
        } finally {
            clearToken();
            navigate("/");
        }
    };

    return (
        <div ref={wrapperRef} className={cx("dropDown")}>
            <div className={cx("item__top")}>
                <button onClick={() => console.log("ProFile")} className={cx("btn")}>
                    <div className={cx("wrapper__top")}>
                        <div className={cx("avatar")}>
                            <i className="far fa-frown"></i>
                        </div>
                        <div className={cx("info")}>
                            <p className={cx("title")}>Nhất Trịnh</p>
                            <p className={cx("code")}>@112233445566</p>
                        </div>
                    </div>
                </button>
            </div>
            <hr className={cx("divider")} />
            <div className={cx("item")}>
                <button onClick={() => console.log("Update")} className={cx("btn")}>
                    <div className={cx("wrapper")}>
                        <i className="far fa-frown"></i>
                        <p>Nâng cấp gói</p>
                    </div>
                </button>
            </div>
            <div className={cx("item")}>
                <button onClick={() => console.log("Person")} className={cx("btn")}>
                    <div className={cx("wrapper")}>
                        <i className="far fa-frown"></i>
                        <p>Cá nhân hóa</p>
                    </div>
                </button>
            </div>
            <div className={cx("item")}>
                <button onClick={() => console.log("Setup")} className={cx("btn")}>
                    <div className={cx("wrapper")}>
                        <i className="far fa-frown"></i>
                        <p>Cài đặt</p>
                    </div>
                </button>
            </div>
            <hr className={cx("divider")} />
            <div className={cx("item")}>
               <button onClick={() => console.log("Help")} className={cx("btn")}>
                    <div className={cx("wrapper")}>
                        <i className="far fa-frown"></i>
                        <p>Trợ giúp</p>
                    </div>
               </button>
            </div>
            <div className={cx("item")}>
              <button onClick={() => console.log("Logout")} className={cx("btn")}>
                    <div className={cx("wrapper")}>
                        <i className="far fa-frown"></i>
                        <p>Đăng xuất</p>
                    </div>
              </button>
            </div>
        </div>
    );
}
