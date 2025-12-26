import classNames from "classnames/bind";
import styles from "./setupmodal.module.css";
import { useState } from "react";

const cx = classNames.bind(styles);

export default function SetupModal({ onClose, onClick, value }) {
    const [index, setIndex] = useState<number>(value);
    const [onButton, setButton] = useState<boolean>(false);
    const [onButton1, setButton1] = useState<boolean>(false);

    return (
        <>
            <div onClick={onClose} className={cx("modal-overlay")}>
                <div onClick={onClick} className={cx("modal-container")}>
                    <div className={cx("table__left")}>
                        <div className={cx("out")}>
                            <button
                                onClick={onClose}
                                className={cx("out__content")}
                            >
                                X
                            </button>
                        </div>
                        <button
                            onClick={() => setIndex(1)}
                            className={cx("select", { active: index === 1 })}
                        >
                            <div className={cx("select__content")}>
                                <div className={cx("content__icon")}>
                                    <i className={cx("far", "fa-frown")}></i>
                                </div>
                                <div className={cx("content__text")}>
                                    <div>Chung</div>
                                </div>
                            </div>
                        </button>
                        <button
                            onClick={() => setIndex(2)}
                            className={cx("select", { active: index === 2 })}
                        >
                            <div className={cx("select__content")}>
                                <div className={cx("content__icon")}>
                                    <i className={cx("far", "fa-frown")}></i>
                                </div>
                                <div className={cx("content__text")}>
                                    <div>Thông báo</div>
                                </div>
                            </div>
                        </button>
                        <button
                            onClick={() => setIndex(3)}
                            className={cx("select", { active: index === 3 })}
                        >
                            <div className={cx("select__content")}>
                                <div className={cx("content__icon")}>
                                    <i className={cx("far", "fa-frown")}></i>
                                </div>
                                <div className={cx("content__text")}>
                                    <div>Cá nhân hóa</div>
                                </div>
                            </div>
                        </button>
                        <button
                            onClick={() => setIndex(4)}
                            className={cx("select", { active: index === 4 })}
                        >
                            <div className={cx("select__content")}>
                                <div className={cx("content__icon")}>
                                    <i className={cx("far", "fa-frown")}></i>
                                </div>
                                <div className={cx("content__text")}>
                                    <div>Ứng dụng</div>
                                </div>
                            </div>
                        </button>
                        <button
                            onClick={() => setIndex(5)}
                            className={cx("select", { active: index === 5 })}
                        >
                            <div className={cx("select__content")}>
                                <div className={cx("content__icon")}>
                                    <i className={cx("far", "fa-frown")}></i>
                                </div>
                                <div className={cx("content__text")}>
                                    <div>Kiểm soát dữ liệu</div>
                                </div>
                            </div>
                        </button>
                        <button
                            onClick={() => setIndex(6)}
                            className={cx("select", { active: index === 6 })}
                        >
                            <div className={cx("select__content")}>
                                <div className={cx("content__icon")}>
                                    <i className={cx("far", "fa-frown")}></i>
                                </div>
                                <div className={cx("content__text")}>
                                    <div>Bảo mật</div>
                                </div>
                            </div>
                        </button>
                        <button
                            onClick={() => setIndex(7)}
                            className={cx("select", { active: index === 7 })}
                        >
                            <div className={cx("select__content")}>
                                <div className={cx("content__icon")}>
                                    <i className={cx("far", "fa-frown")}></i>
                                </div>
                                <div className={cx("content__text")}>
                                    <div>Quyền kiểm soát</div>
                                </div>
                            </div>
                        </button>
                        <button
                            onClick={() => setIndex(8)}
                            className={cx("select", { active: index === 8 })}
                        >
                            <div className={cx("select__content")}>
                                <div className={cx("content__icon")}>
                                    <i className={cx("far", "fa-frown")}></i>
                                </div>
                                <div className={cx("content__text")}>
                                    <div>Tài khoản</div>
                                </div>
                            </div>
                        </button>
                    </div>
                    <div className={cx("table__right")}>
                        {index === 1 && (
                            <div className={cx("container")}>
                                <div className={cx("global")}>
                                    <h3>Chung</h3>
                                </div>

                                <div className={cx("column")}>
                                    <div className={cx("column__top")}>
                                        <div
                                            className={cx(
                                                "column__top--content"
                                            )}
                                        >
                                            <div className={cx("title")}>
                                                Giao diện
                                            </div>
                                            <button
                                                className={cx("button")}
                                                type="button"
                                                onClick={() =>
                                                    console.log("Giao diện")
                                                }
                                            >
                                                <span>Hệ thống</span>
                                                <span>
                                                    <i
                                                        className={cx(
                                                            "fas",
                                                            "fa-chevron-down",
                                                            "icon__x"
                                                        )}
                                                    ></i>
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className={cx("column")}>
                                    <div className={cx("column__top")}>
                                        <div
                                            className={cx(
                                                "column__top--content"
                                            )}
                                        >
                                            <div className={cx("title")}>
                                                Màu điểm nhấn
                                            </div>
                                            <button
                                                className={cx("button")}
                                                type="button"
                                                onClick={() =>
                                                    console.log("Màu điểm nhấn")
                                                }
                                            >
                                                <span
                                                    className={cx("span__text")}
                                                >
                                                    <div className={cx("text")}>
                                                        <div
                                                            className={cx(
                                                                "text__content"
                                                            )}
                                                        >
                                                            <div
                                                                className={cx(
                                                                    "icon"
                                                                )}
                                                            ></div>
                                                            <div>
                                                                Xanh Dương
                                                            </div>
                                                        </div>
                                                    </div>
                                                </span>
                                                <span>
                                                    <i
                                                        className={cx(
                                                            "fas",
                                                            "fa-chevron-down",
                                                            "icon__x"
                                                        )}
                                                    ></i>
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className={cx("column")}>
                                    <div className={cx("column__top")}>
                                        <div
                                            className={cx(
                                                "column__top--content"
                                            )}
                                        >
                                            <div className={cx("title")}>
                                                Ngôn ngữ
                                            </div>
                                            <button
                                                className={cx("button")}
                                                type="button"
                                                onClick={() =>
                                                    console.log("Ngôn ngữ")
                                                }
                                            >
                                                <span>Dò tìm tự động</span>
                                                <span>
                                                    <i
                                                        className={cx(
                                                            "fas",
                                                            "fa-chevron-down",
                                                            "icon__x"
                                                        )}
                                                    ></i>
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className={cx("speak")}>
                                    <div className={cx("speak__content")}>
                                        <div
                                            className={cx(
                                                "speak__content--top"
                                            )}
                                        >
                                            <div className={cx("title")}>
                                                Ngôn ngữ nói
                                            </div>
                                            <button
                                                className={cx("button")}
                                                type="button"
                                                onClick={() =>
                                                    console.log("Ngôn ngữ nói")
                                                }
                                            >
                                                <span>Dò tự động</span>
                                                <span>
                                                    <i
                                                        className={cx(
                                                            "fas",
                                                            "fa-chevron-down",
                                                            "icon__x"
                                                        )}
                                                    ></i>
                                                </span>
                                            </button>
                                        </div>
                                        <div
                                            className={cx(
                                                "speak__content--bottom"
                                            )}
                                        >
                                            Để có kết quả tốt nhất, hãy chọn
                                            ngôn ngữ trò chuyện chính của bạn.
                                            Nếu ngôn ngữ của bạn chưa có trong
                                            danh sách, có khả năng hệ thống vẫn
                                            hỗ trợ ngôn ngữ này thông qua tính
                                            năng dò tìm tự động.
                                        </div>
                                    </div>
                                </div>

                                <div className={cx("column")}>
                                    <div className={cx("column__top")}>
                                        <div className={cx("column__top")}>
                                            <div
                                                className={cx(
                                                    "column__top--content"
                                                )}
                                            >
                                                <div className={cx("title")}>
                                                    Thoại
                                                </div>
                                                <div
                                                    className={cx("button__x")}
                                                >
                                                    <button
                                                        className={cx(
                                                            "button__top"
                                                        )}
                                                        onClick={() =>
                                                            console.log("Phát")
                                                        }
                                                    >
                                                        <span>
                                                            <i
                                                                className={cx(
                                                                    "fa-solid",
                                                                    "fa-play",
                                                                    "icon__y"
                                                                )}
                                                            ></i>
                                                        </span>
                                                        <span> Phát</span>
                                                    </button>
                                                    <div
                                                        className={cx("space")}
                                                    ></div>
                                                    <button
                                                        className={cx(
                                                            "button__bottom"
                                                        )}
                                                        onClick={() =>
                                                            console.log("Ember")
                                                        }
                                                    >
                                                        <span>Ember</span>
                                                        <span>
                                                            <i
                                                                className={cx(
                                                                    "fas",
                                                                    "fa-chevron-down",
                                                                    "icon__x"
                                                                )}
                                                            ></i>
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={cx("private")}>
                                    <div className={cx("private__row")}>
                                        <div className={cx("row__header")}>
                                            <div
                                                className={cx(
                                                    "row__content--top"
                                                )}
                                            >
                                                <div className={cx("title")}>
                                                    Chế độ thoại riêng biệt
                                                </div>
                                                <div
                                                    onClick={() => {
                                                        setButton(!onButton);
                                                        console.log("On Click");
                                                    }}
                                                    className={cx("button", {
                                                        on: onButton,
                                                    })}
                                                >
                                                    <div
                                                        className={cx(
                                                            "button__content"
                                                        )}
                                                    ></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={cx("row__content")}>
                                            Duy trì ChatIZN Voice ở chế độ toàn
                                            màn hình riêng biệt, không có bản
                                            ghi và hình ảnh theo thời gian thực.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {index === 2 && (
                            <div className={cx("container")}>
                                <div className={cx("global")}>
                                    <h3>Thông báo</h3>
                                </div>
                                <div className={cx("speak__x")}>
                                    <div className={cx("speak__content")}>
                                        <div
                                            className={cx(
                                                "speak__content--top"
                                            )}
                                        >
                                            <div className={cx("title")}>
                                                Phản hồi
                                            </div>
                                            <button
                                                className={cx("button")}
                                                type="button"
                                                onClick={() =>
                                                    console.log("Ngôn ngữ nói")
                                                }
                                            >
                                                <span>Đẩy</span>
                                                <span>
                                                    <i
                                                        className={cx(
                                                            "fas",
                                                            "fa-chevron-down",
                                                            "icon__x"
                                                        )}
                                                    ></i>
                                                </span>
                                            </button>
                                        </div>
                                        <div
                                            className={cx(
                                                "speak__content--bottom"
                                            )}
                                        >
                                            Nhận thông báo khi ChatIZN phản hồi
                                            các yêu cầu mất thời gian, như
                                            nghiên cứu hoặc tạo hình ảnh.
                                        </div>
                                    </div>
                                </div>
                                <div className={cx("speak__y")}>
                                    <div className={cx("speak__content")}>
                                        <div
                                            className={cx(
                                                "speak__content--top"
                                            )}
                                        >
                                            <div className={cx("title")}>
                                                Đoạn chat nhóm
                                            </div>
                                            <button
                                                className={cx("button")}
                                                type="button"
                                                onClick={() =>
                                                    console.log("Ngôn ngữ nói")
                                                }
                                            >
                                                <span>Đẩy</span>
                                                <span>
                                                    <i
                                                        className={cx(
                                                            "fas",
                                                            "fa-chevron-down",
                                                            "icon__x"
                                                        )}
                                                    ></i>
                                                </span>
                                            </button>
                                        </div>
                                        <div
                                            className={cx(
                                                "speak__content--bottom"
                                            )}
                                        >
                                            Bạn sẽ nhận được thông báo về tin
                                            nhắn mới từ các đoạn chat nhóm.
                                        </div>
                                    </div>
                                </div>
                                <div className={cx("speak__x")}>
                                    <div className={cx("speak__content")}>
                                        <div
                                            className={cx(
                                                "speak__content--top"
                                            )}
                                        >
                                            <div className={cx("title")}>
                                                Tác vụ
                                            </div>
                                            <button
                                                className={cx("button")}
                                                type="button"
                                                onClick={() =>
                                                    console.log("Ngôn ngữ nói")
                                                }
                                            >
                                                <span>
                                                    Thông báo đẩy, Email
                                                </span>
                                                <span>
                                                    <i
                                                        className={cx(
                                                            "fas",
                                                            "fa-chevron-down",
                                                            "icon__x"
                                                        )}
                                                    ></i>
                                                </span>
                                            </button>
                                        </div>
                                        <div
                                            className={cx(
                                                "speak__content--bottom"
                                            )}
                                        >
                                            Nhận thông báo khi nhiệm vụ bạn đã
                                            tạo có cập nhật. <br />
                                            Quản lý nhiệm vụ
                                        </div>
                                    </div>
                                </div>
                                <div className={cx("speak__x")}>
                                    <div className={cx("speak__content")}>
                                        <div
                                            className={cx(
                                                "speak__content--top"
                                            )}
                                        >
                                            <div className={cx("title")}>
                                                Projects
                                            </div>
                                            <button
                                                className={cx("button")}
                                                type="button"
                                                onClick={() =>
                                                    console.log("Ngôn ngữ nói")
                                                }
                                            >
                                                <span>Email</span>
                                                <span>
                                                    <i
                                                        className={cx(
                                                            "fas",
                                                            "fa-chevron-down",
                                                            "icon__x"
                                                        )}
                                                    ></i>
                                                </span>
                                            </button>
                                        </div>
                                        <div
                                            className={cx(
                                                "speak__content--bottom"
                                            )}
                                        >
                                            Nhận thông báo khi bạn nhận được
                                            email mời tham gia một dự án <br />
                                            chung.
                                        </div>
                                    </div>
                                </div>
                                <div className={cx("speak__y")}>
                                    <div className={cx("speak__content")}>
                                        <div
                                            className={cx(
                                                "speak__content--top"
                                            )}
                                        >
                                            <div className={cx("title")}>
                                                Đề xuất
                                            </div>
                                            <button
                                                className={cx("button")}
                                                type="button"
                                                onClick={() =>
                                                    console.log("Ngôn ngữ nói")
                                                }
                                            >
                                                <span>
                                                    Thông báo đẩy, Email
                                                </span>
                                                <span>
                                                    <i
                                                        className={cx(
                                                            "fas",
                                                            "fa-chevron-down",
                                                            "icon__x"
                                                        )}
                                                    ></i>
                                                </span>
                                            </button>
                                        </div>
                                        <div
                                            className={cx(
                                                "speak__content--bottom"
                                            )}
                                        >
                                            Nhận cập nhật về các công cụ, mẹo và
                                            tính năng mới từ ChatIZN.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {index === 3 && (
                            <div className={cx("container")}>
                                <div className={cx("global")}>
                                    <h3>Cá nhân hóa</h3>
                                </div>
                            </div>
                        )}
                        {index === 4 && (
                            <div className={cx("container")}>
                                <div className={cx("global")}>
                                    <h3>Ứng dụng</h3>
                                </div>
                                <div className={cx("box")}>
                                    <div className={cx("box__brands")}>
                                        <div className={cx("box__brands-x")}>
                                            <div
                                                className={cx(
                                                    "box__brands--ix"
                                                )}
                                            >
                                                <i
                                                    className={cx(
                                                        "fa-brands",
                                                        "fa-itunes-note",
                                                        "icon_x"
                                                    )}
                                                ></i>
                                            </div>
                                        </div>
                                        <div className={cx("box__brands-y")}>
                                            <div
                                                className={cx(
                                                    "box__brands--iy"
                                                )}
                                            >
                                                <i
                                                    className={cx(
                                                        "fa-brands",
                                                        "fa-github",
                                                        "icon_y"
                                                    )}
                                                ></i>
                                            </div>
                                        </div>
                                        <div className={cx("box__brands-z")}>
                                            <div
                                                className={cx(
                                                    "box__brands--iz"
                                                )}
                                            >
                                                <i
                                                    className={cx(
                                                        "fa-brands",
                                                        "fa-discord",
                                                        "icon_z"
                                                    )}
                                                ></i>
                                            </div>
                                        </div>
                                        <div className={cx("box__brands-t")}>
                                            <div
                                                className={cx(
                                                    "box__brands--it"
                                                )}
                                            >
                                                <i
                                                    className={cx(
                                                        "fa-brands",
                                                        "fa-reddit",
                                                        "icon_t"
                                                    )}
                                                ></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={cx("box__title")}>
                                        Thêm và quản lý các ứng dụng mà ChatIZN
                                        có thể sử dụng trong <br />
                                        các đoạn chat của bạn.
                                    </div>
                                    <div className={cx("box__button")}>
                                        <button
                                            className={cx("box__button--x")}
                                        >
                                            Khám phá ứng dụng
                                        </button>
                                    </div>
                                </div>
                                <div className={cx("setup")}>
                                    <button
                                        onClick={() => console.log("1")}
                                        className={cx("setup__box")}
                                    >
                                        <div className={cx("box__top")}>
                                            <div
                                                className={cx("box__top--icon")}
                                            >
                                                <i
                                                    className={cx(
                                                        "far",
                                                        "fa-frown"
                                                    )}
                                                ></i>
                                            </div>
                                            <div
                                                className={cx("box__top--text")}
                                            >
                                                Cài đặt nâng cao
                                            </div>
                                        </div>
                                        <div className={cx("box__bottom")}>
                                            <div
                                                className={cx(
                                                    "box__bottom--content"
                                                )}
                                            >
                                                <i
                                                    className={cx(
                                                        "fas",
                                                        "fa-chevron-down",
                                                        "icon__x"
                                                    )}
                                                ></i>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        )}
                        {index === 5 && (
                            <div className={cx("container")}>
                                <div className={cx("global")}>
                                    <h3>Kiểm soát dữ liệu</h3>
                                </div>
                                <div className={cx("header__left")}>
                                    <div className={cx("header__left--title")}>
                                        Cải thiện mô hình cho mọi người
                                    </div>
                                    <div className={cx("header__left--button")}>
                                        <div className={cx("text__button")}>
                                            Bật
                                        </div>
                                        <div className={cx("icon__button")}>
                                            <i
                                                className={cx(
                                                    "fas",
                                                    "fa-chevron-down",
                                                    "icon__x"
                                                )}
                                            ></i>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx("header__mid")}>
                                    <div className={cx("header__mid--title")}>
                                        Liên kết được chia sẻ
                                    </div>
                                    <div className={cx("header__mid--button")}>
                                        <button>Quản lý</button>
                                    </div>
                                </div>
                                <div className={cx("header__mid")}>
                                    <div className={cx("header__mid--title")}>
                                        Đoạn chat đã lưu trữ
                                    </div>
                                    <div className={cx("header__mid--button")}>
                                        <button>Quản lý</button>
                                    </div>
                                </div>
                                <div className={cx("header__mid")}>
                                    <div className={cx("header__mid--title")}>
                                        Lưu trữ tất cả đoạn chat
                                    </div>
                                    <div className={cx("header__mid--button")}>
                                        <button>Lưu trữ tất cả</button>
                                    </div>
                                </div>
                                <div className={cx("header__mid")}>
                                    <div className={cx("header__mid--title")}>
                                        Xóa tất cả đoạn chat
                                    </div>
                                    <div className={cx("header__mid--button")}>
                                        <button className={cx("prev")}>
                                            Xóa tất cả
                                        </button>
                                    </div>
                                </div>
                                <div className={cx("header__mid")}>
                                    <div className={cx("header__mid--title")}>
                                        Xuất dữ liệu
                                    </div>
                                    <div className={cx("header__mid--button")}>
                                        <button>Xuất</button>
                                    </div>
                                </div>
                            </div>
                        )}
                        {index === 6 && (
                            <div className={cx("container")}>
                                <div className={cx("global")}>
                                    <h3>Bảo mật</h3>
                                </div>
                                <button className={cx("secure__key")}>
                                    <div className={cx("key__column")}>
                                        <div className={cx("column__title")}>
                                            Khóa mã hóa
                                        </div>
                                        <div className={cx("column__text")}>
                                            Khóa mã hóa an toàn và bảo vệ tài
                                            khoản của bạn bằng hình xác <br />
                                            thực đa yếu tố. Phương thức này
                                            không cần thực hiện thêm bất kỳ{" "}
                                            <br />
                                            bước nào.
                                        </div>
                                    </div>
                                    <div className={cx("key__row")}>
                                        <div className={cx("row__title")}>
                                            Thêm
                                        </div>
                                        <div className={cx("row__content")}>
                                            <i
                                                className={cx(
                                                    "fas",
                                                    "fa-chevron-down"
                                                )}
                                            ></i>
                                        </div>
                                    </div>
                                </button>
                                <div className={cx("secure__mfa")}>
                                    Xác thực đa nhân tố (MFA)
                                </div>
                                <div className={cx("secure__application")}>
                                    <div className={cx("app__auth")}>
                                        <div className={cx("auth__title")}>
                                            Ứng dụng xác thực
                                        </div>

                                        <div
                                            onClick={() => {
                                                setButton1(!onButton1);
                                                console.log("On Click");
                                            }}
                                            className={cx("button", {
                                                on: onButton1,
                                            })}
                                        >
                                            <div
                                                className={cx(
                                                    "button__content"
                                                )}
                                            ></div>
                                        </div>
                                    </div>
                                    <div className={cx("app__support")}>
                                        Sử dụng mã dùng một lần từ ứng dụng
                                    </div>
                                </div>
                                <div className={cx("secure__device")}>
                                    <div className={cx("secure__title")}>
                                        Thiết bị đáng tin cậy
                                    </div>
                                    <div className={cx("secure__content")}>
                                        Khi bạn đăng nhập trên một thiết bị
                                        khác, thiết bị đó sẽ được thêm
                                        <br /> vào đây và có thể tự động nhận
                                        được lời nhắc đăng nhập trên thiết bị
                                        <br /> đó.
                                    </div>
                                </div>
                                <div className={cx("secure__logout")}>
                                    <div className={cx("logout__title")}>
                                        Đăng xuất khỏi thiết bị
                                    </div>
                                    <button className={cx("logout__button")}>
                                        <div>Đăng xuất</div>
                                    </button>
                                </div>
                                <div className={cx("secure__out")}>
                                    <div className={cx("out__left")}>
                                        <div
                                            className={cx(
                                                "secure__left--title"
                                            )}
                                        >
                                            Đăng xuất khỏi tất cả thiết bị
                                        </div>
                                        <div
                                            className={cx(
                                                "secure__left--content"
                                            )}
                                        >
                                            Đăng xuất khỏi tất cả các phiên hoạt
                                            động
                                            <br /> trên tất cả các thiết bị, bao
                                            gồm cả phiên hiện
                                            <br /> tại của bạn. Việc đăng xuất ở
                                            các thiết bị khác
                                            <br /> có thể mất tới 30 phút.
                                        </div>
                                    </div>
                                    <div className={cx("out__right")}>
                                        <button
                                            className={cx(
                                                "out__right--content"
                                            )}
                                        >
                                            <div>Đăng xuất khỏi tất cả</div>
                                        </button>
                                    </div>
                                </div>
                                <div className={cx("secure__login")}>
                                    <div className={cx("secure__login--left")}>
                                        Đăng nhập an toàn với ChatIZN
                                    </div>
                                    <div className={cx("secure__login--right")}>
                                        Đăng nhập các trang web và ứng dụng trên
                                        Internet bằng tính năng bảo
                                        <br /> mật đáng tin cậy của ChatGPT.{" "}
                                        <span className={cx("prev")}>
                                            Tìm hiểu thêm
                                        </span>
                                    </div>
                                </div>
                                <div className={cx("secure__banner")}>
                                    <div className={cx("banner__content")}>
                                        <div className={cx("content")}>
                                            Bạn chưa sử dụng ChatGPT để đăng
                                            nhập vào bất kỳ trang<br/> web hoặc ứng
                                            dụng nào. Khi bạn làm vậy, chúng sẽ
                                            hiển thị ở<br/> đây.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {index === 7 && (
                            <div className={cx("container")}>
                                <div className={cx("global")}>
                                    <h3>Quyền kiểm soát</h3>
                                </div>
                                <div className={cx("control")}>
                                    <div className={cx("control__content")}>
                                        Cha mẹ và trẻ có thể liên kết tài khoản,
                                        qua đó cung cấp cho cha mẹ <br />
                                        các công cụ để điều chỉnh một số tính
                                        năng, đặt giới hạn và thêm các <br />
                                        biện pháp bảo vệ phù hợp với gia đình
                                        họ.
                                    </div>
                                </div>
                                <div className={cx("control__button")}>
                                    <button
                                        onClick={() => console.log("1")}
                                        className={cx("button")}
                                    >
                                        <div>
                                            <i
                                                className={cx(
                                                    "far",
                                                    "fa-frown"
                                                )}
                                            ></i>
                                        </div>
                                        <div>Thêm thành viên gia đình</div>
                                    </button>
                                </div>
                            </div>
                        )}
                        {index === 8 && (
                            <div className={cx("container")}>
                                <div className={cx("global")}>
                                    <h3>Tài khoản</h3>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
