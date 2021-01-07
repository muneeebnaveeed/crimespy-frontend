import React from "react";
import routes from "./routes";

function Routes() {
    return routes.map((route, index) => (
        <route.route key={`route-${index}`} path={route.path} component={route.component} exact />
    ));
}

export default Routes;
