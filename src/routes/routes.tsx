import { ReactNode } from "react";
import Home from "pages/Home";
import Login from "pages/Login";
import Header from "components/Header";
import Profile from "pages/Profile";
import Movie from "pages/Movie";

interface RouteType {
  path: string;
  name: string;
  child: ReactNode;
  subRoutes: Array<SubrouteType>;
  hidden: boolean;
  protectedRoute: boolean;
}
interface SubrouteType {
  path: string;
  name: string;
  child: ReactNode;
  hidden: boolean;
  protectedRoute: boolean;
}

const routeList: Array<RouteType> = [
  { // Home
    path: "/",
    name: "Home",
    child: <Header><Home /></Header>,
    subRoutes: [],
    hidden: false,
    protectedRoute: true
  },
  { // Profile
    path: "/profile",
    name: "Profile",
    child: <Header><Profile /></Header>,
    subRoutes: [],
    hidden: false,
    protectedRoute: true
  },
  { // Movie
    path: "/movie",
    name: "Movie",
    child: <Header><Movie /></Header>,
    subRoutes: [],
    hidden: false,
    protectedRoute: true
  },
  { // Login
    path: "/login",
    name: "Login",
    child: <Login />,
    subRoutes: [],
    hidden: true,
    protectedRoute: false
  }
];

export { routeList };
export type { RouteType, SubrouteType }