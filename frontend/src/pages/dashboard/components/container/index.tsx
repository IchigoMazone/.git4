import classNames from "classnames/bind";
import Navbar from "../navbar";
import Header from "../header";
import Content from "../content";
import ContentLeft from "../no-content-left/no-content-left";
import ContentRight from "../no-content-right/no-content-right";
import styles from "./container.module.css";

const cx = classNames.bind(styles);

interface Actions {
    logout: () => void;
}

interface ContainerProps {
    actions: Actions;
}

export default function Container({ actions }: ContainerProps) {
    return (
        <>
            <div className={cx("container")}>
                <Navbar actions={actions} />
                <Header />
                <Content />
                <ContentLeft />
                <ContentRight />
            </div>
        </>
    );
}
