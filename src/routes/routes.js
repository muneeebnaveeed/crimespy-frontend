import Feed from "pages/feed";

import VerticalLayout from "layout/VerticalLayout";
import AuthLayout from "layout/AuthLayout";

import { Route } from "react-router-dom";

const getLayout = (layout) => {
    if (!layout || layout === "vertical") return VerticalLayout;
    return AuthLayout;
};

export const PrivateRoute = ({ layout, component: Component, ...rest }) => (
    <Route
        exact
        {...rest}
        render={(props) => {
            // if (!isUserAuthenticated()) {
            //     // not logged in so redirect to login page with the return url
            //     return (
            //         <Redirect
            //             to={{ pathname: "/account/login", state: { from: props.location } }}
            //         />
            //     );
            // }

            // const loggedInUser = getLoggedInUser();

            // check if route is restricted by role
            // if (roles && roles.indexOf(loggedInUser.role) === -1) {
            //     // role not authorised so redirect to home page
            //     return <Redirect to={{ pathname: "/" }} />;
            // }

            const Layout = getLayout(props.layout);
            return (
                <Layout>
                    <Component {...props} />
                </Layout>
            );
        }}
    />
);

const routes = [
    {
        component: Feed,
        route: PrivateRoute,
        path: "/",
        layout: "vertical",
    },
];

export default routes;
