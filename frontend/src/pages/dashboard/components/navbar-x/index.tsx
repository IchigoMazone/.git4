import { useEditor } from "../../../../state/useEditor";
import styles from "./navbar-x.module.css";
import classNames from "classnames/bind";
import { useState } from "react";

interface T {
    type: string | null;
    value: number | string | null;
}

const cx = classNames.bind(styles);

export default function Navbarx() {
    const { state, dispatch } = useEditor();
    const [project, setProject] = useState<boolean>(false);
    const [group, setGroup] = useState<boolean>(false);
    const [chat, setChat] = useState<boolean>(false);
    const [openproject, setOpenProject] = useState<boolean>(false);
    const [opengroup, setOpenGroup] = useState<boolean>(false);
    const [openchat, setOpenChat] = useState<boolean>(false);
    const [hoverIndex, setHoverIndex] = useState<null | boolean>(null);
    const [hoverIndex2, setHoverIndex2] = useState<null | boolean>(null);
    const [hoverIndex3, setHoverIndex3] = useState<null | boolean>(null);
    const [active, setActive] = useState<T>({ type: null, value: null });
    const [hoverX, setHoverX] = useState<T>({ type: null, value: null });

    const listChat = ["Python", "JavaScript", "Dart", "Java"];

    const list = [
        {
            type: "project",
            items: ["Học tập", "Giải trí", "Chơi game", "Ôn thi"],
        },
        {
            type: "group",
            items: ["Xem phim", "Đọc truyện", "Bắn súng", "Thi đấu"],
        },
        { type: "chat", items: ["Python", "JavaScript", "Dart", "Java"] },
    ];

    const setTooltip = (key: string, value: boolean) => {
        dispatch({
            type: "SET_TOOLTIP",
            payload: { [key]: value },
        });
    };

    const setState = (
        option: string,
        key: string,
        value: boolean | string | number
    ) => {
        dispatch({ type: option, payload: { [key]: value } });
    };

    return (
        <div className={cx("navbar-x")}>
            <div className={cx("header")}>
                <div className={cx("header__start")}>
                    <div
                        onClick={() =>
                            setState("SET_UTIL", "open", !state.util["open"])
                        }
                        className={cx("header__start--gpt")}
                    >
                        <button>
                            <i className={cx("far", "fa-frown")}></i>
                        </button>
                    </div>
                    <div
                        onClick={() =>
                            setState("SET_UTIL", "open", !state.util["open"])
                        }
                        className={cx("header__start--gpt")}
                    >
                        <button>
                            <i className={cx("far", "fa-frown")}></i>
                        </button>
                    </div>
                </div>
                <div className={cx("header__end")}>
                    <div
                        onClick={() => console.log("Đoạn chat mới")}
                        className={cx("header__end--add-x")}
                    >
                        <div className={cx("header__end--add")}>
                            <button>
                                <i className={cx("far", "fa-frown")}></i>
                            </button>
                        </div>
                        <div className={cx("header__end--add-y")}>
                            <span>Đoạn chat mới</span>
                        </div>
                    </div>

                    <div
                        onClick={() => console.log("Tìm kiếm đoạn chat")}
                        className={cx("header__end--search-x")}
                    >
                        <div className={cx("header__end--search")}>
                            <button>
                                <i className={cx("far", "fa-frown")}></i>
                            </button>
                        </div>
                        <div className={cx("header__end--search-y")}>
                            <span>Tìm kiếm đoạn chat</span>
                        </div>
                    </div>

                    <div
                        onClick={() => {
                            setActive({ type: null, value: "image" });
                            console.log("Ảnh");
                        }}
                        className={cx("header__end--image-x", {
                            active: active.value === "image",
                        })}
                    >
                        <div className={cx("header__end--image")}>
                            <button>
                                <i className={cx("far", "fa-frown")}></i>
                            </button>
                        </div>
                        <div className={cx("header__end--image-y")}>
                            <span>Ảnh</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx("content")}>
                <button
                    onClick={() => {
                        setActive({ type: null, value: "application" });
                        console.log("Ứng dụng");
                    }}
                    className={cx("application", {
                        active: active.value === "application",
                    })}
                >
                    <div className={cx("icon")}>
                        <i className={cx("far", "fa-frown")}></i>
                    </div>
                    <span className={cx("text")}>Ứng dụng</span>
                </button>
                <button
                    onClick={() => setOpenProject(!openproject)}
                    onMouseEnter={() => setProject(true)}
                    onMouseLeave={() => setProject(false)}
                    className={cx("item")}
                >
                    <div>Dự án</div>
                    {project &&
                        (openproject ? (
                            <div>
                                <i className={cx("fas", "fa-chevron-down")}></i>
                            </div>
                        ) : (
                            <div>
                                <i
                                    className={cx("fas", "fa-chevron-right")}
                                ></i>
                            </div>
                        ))}
                </button>
                {openproject && (
                    <button
                        onClick={() => console.log("Dự án mới")}
                        className={cx("items")}
                    >
                        Dự án mới
                    </button>
                )}
                {openproject &&
                    list
                        .find((item) => item.type === "project")
                        ?.items.map((value, index) => (
                            <div
                                key={index}
                                onClick={() => {
                                    setActive({
                                        type: "project",
                                        value: index,
                                    });
                                    console.log(`project: ${value}`);
                                }}
                                className={cx("items", {
                                    hoverX:
                                        hoverX.type === "project" &&
                                        hoverX.value === index,
                                    active:
                                        active.type === "project" &&
                                        active.value === index,
                                })}
                                onMouseEnter={() => setHoverIndex(index)}
                                onMouseLeave={() => setHoverIndex(null)}
                            >
                                <span>{value}</span>

                                {hoverIndex === index && (
                                    <span
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            console.log(
                                                `Setup project: ${value}`
                                            );
                                        }}
                                        onMouseEnter={() =>
                                            setHoverX({
                                                type: "project",
                                                value: index,
                                            })
                                        }
                                        onMouseLeave={() =>
                                            setHoverX({
                                                type: null,
                                                value: null,
                                            })
                                        }
                                    >
                                        <i className="fa-solid fa-ellipsis"></i>
                                    </span>
                                )}
                            </div>
                        ))}
                <button
                    onClick={() => setOpenGroup(!opengroup)}
                    onMouseEnter={() => setGroup(true)}
                    onMouseLeave={() => setGroup(false)}
                    className={cx("item")}
                >
                    <div>Đoạn chat nhóm</div>
                    {group &&
                        (opengroup ? (
                            <div>
                                <i className={cx("fas", "fa-chevron-down")}></i>
                            </div>
                        ) : (
                            <div>
                                <i
                                    className={cx("fas", "fa-chevron-right")}
                                ></i>
                            </div>
                        ))}
                </button>
                {opengroup &&
                    list
                        .find((item) => item.type === "group")
                        ?.items.map((value, index) => (
                            <div
                                key={index}
                                onClick={() => {
                                    setActive({ type: "group", value: index });
                                    console.log(`group: ${value}`);
                                }}
                                className={cx("items", {
                                    hoverX:
                                        hoverX.type === "group" &&
                                        hoverX.value === index,
                                    active:
                                        active.type === "group" &&
                                        active.value === index,
                                })}
                                onMouseEnter={() => setHoverIndex2(index)}
                                onMouseLeave={() => setHoverIndex2(null)}
                            >
                                <span>{value}</span>

                                {hoverIndex2 === index && (
                                    <span
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            console.log(
                                                `Setup group: ${value}`
                                            );
                                        }}
                                        onMouseEnter={() =>
                                            setHoverX({
                                                type: "group",
                                                value: index,
                                            })
                                        }
                                        onMouseLeave={() =>
                                            setHoverX({
                                                type: null,
                                                value: null,
                                            })
                                        }
                                    >
                                        <i className="fa-solid fa-ellipsis"></i>
                                    </span>
                                )}
                            </div>
                        ))}
                <button
                    onClick={() => setOpenChat(!openchat)}
                    onMouseEnter={() => setChat(true)}
                    onMouseLeave={() => setChat(false)}
                    className={cx("item")}
                >
                    <div>Các đoạn chat của bạn</div>
                    {chat &&
                        (openchat ? (
                            <div>
                                <i className={cx("fas", "fa-chevron-down")}></i>
                            </div>
                        ) : (
                            <div>
                                <i
                                    className={cx("fas", "fa-chevron-right")}
                                ></i>
                            </div>
                        ))}
                </button>
                {openchat &&
                    list
                        .find((item) => item.type === "chat")
                        ?.items.map((value, index) => (
                            <div
                                key={index}
                                onClick={() => {
                                    setActive({ type: "chat", value: index });
                                    console.log(`chat: ${value}`);
                                }}
                                className={cx("items", {
                                    hoverX:
                                        hoverX.type === "chat" &&
                                        hoverX.value === index,
                                    active:
                                        active.type === "chat" &&
                                        active.value === index,
                                })}
                                onMouseEnter={() => setHoverIndex3(index)}
                                onMouseLeave={() => setHoverIndex3(null)}
                            >
                                <span>{value}</span>

                                {hoverIndex3 === index && (
                                    <span
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            console.log(`Setup chat: ${value}`);
                                        }}
                                        onMouseEnter={() =>
                                            setHoverX({
                                                type: "chat",
                                                value: index,
                                            })
                                        }
                                        onMouseLeave={() =>
                                            setHoverX({
                                                type: null,
                                                value: null,
                                            })
                                        }
                                    >
                                        <i className="fa-solid fa-ellipsis"></i>
                                    </span>
                                )}
                            </div>
                        ))}
            </div>
            <div className={cx("footer")}>
                <div className={cx("footer__end")}>
                    <div
                        onClick={() =>
                            setState(
                                "SET_DROPDOWN",
                                "logout",
                                !state.dropdown["logout"]
                            )
                        }
                        className={cx("footer__end--profile")}
                    >
                        <button>
                            <i className={cx("far", "fa-frown")}></i>
                        </button>
                    </div>
                </div>
                <div className={cx("footer__end-profile-y")}>
                    <span>IchigoMazone</span>
                    <span className={cx("option")}>Free</span>
                </div>
            </div>
        </div>
    );
}
