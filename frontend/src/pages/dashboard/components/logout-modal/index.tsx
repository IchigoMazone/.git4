import classNames from "classnames/bind";
import styles from "./logoutmodal.module.css";

const cx = classNames.bind(styles);

export default function LogoutModal({ onCloseModal }) {
    return (
        <>
            <div onClick={onCloseModal} className={cx("modal-overlay")}>
                <div className={cx("modal-container")}></div>
            </div>
        </>
    );
}
