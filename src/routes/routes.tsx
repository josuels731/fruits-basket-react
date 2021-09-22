import { ReactNode } from "react";
import Home from "pages/Home";

interface RouteType {
  path: string;
  name: string;
  child: ReactNode;
  subRoutes: Array<SubrouteType>;
  hidden?: boolean;
}
interface SubrouteType {
  path: string;
  name: string;
  child: ReactNode;
  hidden?: boolean;
}

const routeList: Array<RouteType> = [
  { // Home
    path: "/",
    name: "Home",
    child: Home,
    subRoutes: [],
    hidden: true
  },
  { // Login
    path: "/login",
    name: "Login",
    child: null,
    subRoutes: [],
    hidden: true
  }
];

export { routeList };
export type { RouteType, SubrouteType }