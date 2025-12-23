import styles from "./no-content-right.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default function ContentRight() {
    return (
        <>
            <div className={cx("no__content--right")}></div>
        </>
    );
}
