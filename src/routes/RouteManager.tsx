import { ReactNode } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { useLoginContext } from "services/loginContext";
import { routeList } from './routes'

const CheckPrivateRoute = ({ children, protectedRoute }: { children: ReactNode, protectedRoute: boolean }) => {
  const { loginStatus } = useLoginContext()

  // if (protectedRoute && !loginStatus.token)
  // return <Redirect to='/login' />

  return <>{children}</>
}
const renderList = routeList.map(
  ({ path, child, subRoutes, protectedRoute }, index) => {
    const routes = [
      <Route key={index} exact path={path}>
        <CheckPrivateRoute protectedRoute={protectedRoute} children={child} />
      </Route>,
    ];

    subRoutes.forEach((subRoute, index) => {
      routes.push(
        <Route
          key={`${path}${index}`}
          exact
          path={`${path}${subRoute.path}`}
        >
          <CheckPrivateRoute protectedRoute={subRoute.protectedRoute} children={subRoute.child} />
        </Route>
      );
    });
    return routes;
  }
);

function RouteManager() {
  return (
    <Router>
      <Switch>{renderList}</Switch>
    </Router>
  );
}

export default RouteManager;
