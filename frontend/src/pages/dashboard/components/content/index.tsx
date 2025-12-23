import styles from "./content.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default function Content() {
    return (
        <>
            <div className={cx("content")}></div>
        </>
    );
}
