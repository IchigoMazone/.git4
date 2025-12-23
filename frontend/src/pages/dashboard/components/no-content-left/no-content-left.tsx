import styles from "./no-content-left.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default function ContentLeft() {
    return (
        <>
            <div className={cx("no__content--left")}></div>
        </>
    );
}
