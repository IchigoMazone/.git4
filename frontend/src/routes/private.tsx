//
import type { RouteObject } from "react-router-dom";
import Login from "../pages/login";

const privateRoutes: RouteObject[] = [{ path: "/", element: <Login /> }];
export default privateRoutes;
