import styles from "./header.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default function Header() {
    return (
        <>
            <div className={cx("header")}></div>
        </>
    );
}
