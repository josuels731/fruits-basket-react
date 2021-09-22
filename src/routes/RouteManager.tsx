import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { routeList } from './routes'

const renderList = routeList.map(
  ({ path, child, subRoutes }, index) => {
    const routes = [
      <Route key={index} exact path={path}>
        {child}
      </Route>,
    ];

    subRoutes.forEach((subRoute, index) => {
      routes.push(
        <Route
          key={`${path}${index}`}
          exact
          path={`${path}${subRoute.path}`}
        >
          {subRoute.child}
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
