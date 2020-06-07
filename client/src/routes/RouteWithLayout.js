import React from 'react';
import {Route} from "react-router";

const RouteWithLayout = ({component: Component, layout: Layout, ...rest}) => {
    return (
        <Route {...rest} render={(props) =>
            <Layout {...props}>
                <Component {...props} />
            </Layout>
        }
        />
    )
};

export default RouteWithLayout;