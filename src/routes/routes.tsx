import { ReactNode } from "react";
import Home from "pages/Home";
import Login from "pages/Login";
import Header from "components/Header";
import Profile from "pages/Profile";

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
    child: <Header><Home /></Header>,
    subRoutes: [],
    hidden: true
  },
  { // Home
    path: "/profile",
    name: "Profile",
    child: <Header><Profile /></Header>,
    subRoutes: [],
    hidden: true
  },
  { // Login
    path: "/login",
    name: "Login",
    child: <Login />,
    subRoutes: [],
    hidden: true
  }
];

export { routeList };
export type { RouteType, SubrouteType }