// import { useState, useRef, useEffect } from "react";
// import { getAccessToken } from "../../utils/accessToken";
// import classNames from "classnames/bind";
// import axios from "axios";
// import Loading from "../loading";
// import styles from "./dashboard.module.css";
// import DropDown from "./components/drop-down";
// import LogoutModal from "./components/logout-modal";

// const cx = classNames.bind(styles);

// interface Active {
//     activeLogo: boolean;
//     activeHover: boolean;
//     activeNew: boolean;
//     activeSearch: boolean;
//     activeImage: boolean;
//     activeSpackle: boolean;
//     activeLogout: boolean;
// }

// interface Util {
//     loading: boolean;
//     hidden: boolean;
//     open: boolean;
//     username: string;
//     error: string;
// }

// interface Modal {
//     profile: boolean;
//     update: boolean;
//     person: boolean;
//     setup: boolean;
//     help: boolean;
//     logout: boolean;
// }

// function Dashboard() {
//     const buttonRef = useRef(null);

//     const [util, setUtil] = useState<Util>({
//         loading: true,
//         hidden: false,
//         open: false,
//         username: "",
//         error: "",
//     });

//     const [activeTooltip, setTooltip] = useState<Active>({
//         activeLogo: false,
//         activeHover: false,
//         activeNew: false,
//         activeSearch: false,
//         activeImage: false,
//         activeSpackle: false,
//         activeLogout: false,
//     });

//     const [modal, setModal] = useState<Modal>({
//         profile: false,
//         update: false,
//         person: false,
//         setup: false,
//         help: false,
//         logout: false,
//     });

//     useEffect(() => {
//         const token = getAccessToken();

//         if (!token) {
//             setUtil((prev) => ({
//                 ...prev,
//                 error: "Token khong ton tai",
//             }));
//         }

//         const fetchProFile = async () => {
//             try {
//                 const response = await axios.get(
//                     "http://localhost:5000/auth/profile",
//                     {
//                         headers: {
//                             Authorization: `Bearer ${token}`,
//                         },
//                     }
//                 );
//                 setUtil((prev) => ({
//                     ...prev,
//                     username: response.data.user.username,
//                     error: response.data.success,
//                 }));

//                 setUtil((prev) => ({
//                     ...prev,
//                     error: response.data.success,
//                 }));
//             } catch (error: any) {
//                 setUtil((prev) => ({
//                     ...prev,
//                     error:
//                         error.response?.data?.message ||
//                         "Lỗi mất kết nối server...",
//                 }));
//             }
//         };
//         fetchProFile();
//     }, []);

//     useEffect(() => {
//         const timer = setTimeout(() => {
//             handleLoading(false);
//         }, 2000);

//         return () => clearTimeout(timer);
//     }, []);

//     const handleLoading = (value: boolean) => {
//         setUtil((prev) => ({
//             ...prev,
//             loading: value,
//         }));
//     };

//     const ModalLogout = () => {
//         setModal((prev) => ({
//             ...prev,
//             logout: !prev.logout,
//         }));
//     };

//     const handleClickLogo = () => {
//         console.log("[CLICK]: Mở thanh bên");
//     };

//     const handleClickNew = () => {
//         console.log("[CLICK]: Đoạn chat mới");
//     };

//     const handleClickSearch = () => {
//         console.log("[CLICK]: Tìm kiếm đoạn chat");
//     };

//     const handleClickImage = () => {
//         console.log("[CLICK]: Ảnh");
//     };

//     const handleClickVip = () => {
//         console.log("[CLICK]: Nâng cấp");
//     };

//     const handleActive = () => {
//         setUtil((prev) => ({
//             ...prev,
//             hidden: !prev.hidden,
//         }));
//         console.log("[CLICK]: Đăng xuất");
//     };

//     const ToolTipLogo = () => {
//         setTooltip((prev) => ({
//             ...prev,
//             activeLogo: !prev.activeLogo,
//         }));
//         console.log("Mở thanh bên");
//     };

//     const ToolTipHover = () => {
//         setTooltip((prev) => ({
//             ...prev,
//             activeHover: !prev.activeHover,
//         }));
//     };

//     const ToolTipNew = () => {
//         setTooltip((prev) => ({
//             ...prev,
//             activeNew: !prev.activeNew,
//         }));
//         console.log("Đoạn chat mới");
//     };

//     const ToolTipSearch = () => {
//         setTooltip((prev) => ({
//             ...prev,
//             activeSearch: !prev.activeSearch,
//         }));
//         console.log("Tìm kiếm đoạn chat");
//     };

//     const ToolTipImage = () => {
//         setTooltip((prev) => ({
//             ...prev,
//             activeImage: !prev.activeImage,
//         }));
//         console.log("Ảnh");
//     };

//     const ToolTipSpackle = () => {
//         setTooltip((prev) => ({
//             ...prev,
//             activeSpackle: !prev.activeSpackle,
//         }));
//         console.log("Nâng cấp");
//     };

//     const ToolTipLogout = () => {
//         setTooltip((prev) => ({
//             ...prev,
//             activeLogout: !prev.activeLogout,
//         }));
//         console.log("Nhất Trịnh");
//     };

//     const handleLogoutModal = () => {
//         ModalLogout();
//         handleActive();
//     };

//     return (
//         <>
//             {util.loading ? (
//                 <Loading />
//             ) : (
//                 <div className={cx("container")}>
//                     <div
//                         onMouseEnter={ToolTipLogo}
//                         onMouseLeave={ToolTipLogo}
//                         onClick={handleClickLogo}
//                         className={cx("navbar")}
//                     >
//                         <div className={cx("icon__gpt")}>
//                             <div className={cx("wrapper")}>
//                                 <div
//                                     onMouseEnter={ToolTipHover}
//                                     onMouseLeave={ToolTipHover}
//                                     className={cx("content")}
//                                 >
//                                     <button onClick={handleClickLogo}>
//                                         {!activeTooltip.activeLogo ? (
//                                             <i
//                                                 className={cx(
//                                                     "far",
//                                                     "fa-frown"
//                                                 )}
//                                             ></i>
//                                         ) : (
//                                             <i
//                                                 className={cx("far", "fa-poo")}
//                                             ></i>
//                                         )}
//                                     </button>
//                                     {activeTooltip.activeHover && (
//                                         <div className={cx("tooltip")}>
//                                             <p>Mở thanh bên</p>
//                                         </div>
//                                     )}
//                                 </div>
//                             </div>
//                         </div>
//                         <div className={cx("icon")}>
//                             <div className={cx("icon__add")}>
//                                 <div
//                                     onMouseEnter={ToolTipNew}
//                                     onMouseLeave={ToolTipNew}
//                                     className={cx("content")}
//                                 >
//                                     <button onClick={handleClickNew}>
//                                         <i
//                                             className={cx("far", "fa-frown")}
//                                         ></i>
//                                     </button>
//                                     {activeTooltip.activeNew && (
//                                         <div className={cx("tooltip")}>
//                                             <p>Đoạn chat mới</p>
//                                         </div>
//                                     )}
//                                 </div>
//                             </div>
//                             <div className={cx("icon__search")}>
//                                 <div
//                                     onMouseEnter={ToolTipSearch}
//                                     onMouseLeave={ToolTipSearch}
//                                     className={cx("content")}
//                                 >
//                                     <button onClick={handleClickSearch}>
//                                         <i
//                                             className={cx("far", "fa-frown")}
//                                         ></i>
//                                     </button>

//                                     {activeTooltip.activeSearch && (
//                                         <div className={cx("tooltip")}>
//                                             <p>Tìm kiếm đoạn chat</p>
//                                         </div>
//                                     )}
//                                 </div>
//                             </div>
//                             <div className={cx("icon__image")}>
//                                 <div
//                                     onMouseEnter={ToolTipImage}
//                                     onMouseLeave={ToolTipImage}
//                                     className={cx("content")}
//                                 >
//                                     <button onClick={handleClickImage}>
//                                         <i
//                                             className={cx("far", "fa-frown")}
//                                         ></i>
//                                     </button>

//                                     {activeTooltip.activeImage && (
//                                         <div className={cx("tooltip")}>
//                                             <p>Ảnh</p>
//                                         </div>
//                                     )}
//                                 </div>
//                             </div>
//                         </div>
//                         <div className={cx("icon__spackle")}>
//                             <div
//                                 onMouseEnter={ToolTipSpackle}
//                                 onMouseLeave={ToolTipSpackle}
//                                 className={cx("content")}
//                             >
//                                 <button onClick={handleClickVip}>
//                                     <i className={cx("far", "fa-frown")}></i>
//                                 </button>

//                                 {activeTooltip.activeSpackle && (
//                                     <div className={cx("tooltip")}>
//                                         <p>Nâng cấp</p>
//                                     </div>
//                                 )}
//                             </div>
//                         </div>
//                         <div className={cx("icon__avatar")}>
//                             <div
//                                 onMouseEnter={ToolTipLogout}
//                                 onMouseLeave={ToolTipLogout}
//                                 className={cx("content")}
//                             >
//                                 <button ref={buttonRef} onClick={handleActive}>
//                                     <i className={cx("far", "fa-frown")}></i>
//                                 </button>
//                                 {activeTooltip.activeLogout && !util.hidden && (
//                                     <div className={cx("tooltip")}>
//                                         <p>Nhất Trịnh</p>
//                                     </div>
//                                 )}
//                             </div>
//                         </div>
//                     </div>
//                     <div className={cx("header")}></div>
//                     <div className={cx("content")}></div>
//                     <div className={cx("no__content--left")}></div>
//                     <div className={cx("no__content--right")}></div>

//                     {util.hidden && (
//                         <DropDown
//                             actions={{
//                                 profile: handleLogoutModal,
//                                 update: handleLogoutModal,
//                                 person: handleLogoutModal,
//                                 setup: handleLogoutModal,
//                                 help: handleLogoutModal,
//                                 logout: handleLogoutModal,
//                             }}
//                             onClose={handleActive}
//                             buttonRef={buttonRef}
//                         />
//                     )}
//                     {modal.profile && (
//                         <LogoutModal onCloseModal={ModalLogout} />
//                     )}
//                     {modal.update && <LogoutModal onCloseModal={ModalLogout} />}
//                     {modal.person && <LogoutModal onCloseModal={ModalLogout} />}
//                     {modal.setup && <LogoutModal onCloseModal={ModalLogout} />}
//                     {modal.help && <LogoutModal onCloseModal={ModalLogout} />}
//                     {modal.logout && <LogoutModal onCloseModal={ModalLogout} />}
//                 </div>
//             )}
//         </>
//     );
// }

// export default Dashboard;

import React from "react";

export default function Dashboard() {
    return <div>Dashboard</div>;
}
