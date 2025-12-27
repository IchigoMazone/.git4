import styles from "./content.module.css";
import classNames from "classnames/bind";
import { useState } from "react";

const cx = classNames.bind(styles);

export default function Content() {
    const [name, setName] = useState("");

    const handleClick = () => {
        const list = [
            "Chúc mừng năm mới",
            "Giáng sinh an lành",
            "Bạn có người yêu chưa =))",
            "Em đen lắm",
            "Chúc mừng bạn đã không trúng gì",
            "Hạnh phúc là gì",
            "Đẹp trai có gì sai...",
            "Năm mới an lành",
            "Sớm có ny nhé =))",
        ];
        const number = Math.floor(Math.random() * list.length);
        setName(list[number]);
    };

    return (
        <>
            <div className={cx("content")}>
                {name === "" && <div className={cx("box")}>
                    <div className={cx("banner")}>Con chó này tên gì...</div>
                    <button onClick={handleClick} className={cx("button")}>
                        Click vào bố
                    </button>
                </div>}
                {name && <div className={cx("prev")}>{name === "" ? "" : name}</div>}
            </div>
        </>
    );
}
