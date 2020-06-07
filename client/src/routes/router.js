import React from 'react';
import RouteWithLayout from "./RouteWithLayout";
import {Switch} from "react-router";
import PageNotFound from "../components/notFound/PageNotFound";
import LandingPageLayout from "../components/layouts/LandingPageLayout";
import LandingPage from "../components/landing/LandingPage";

const Router = () => (
    <>
        <Switch>
            <RouteWithLayout path="/" exact component={LandingPage} layout={LandingPageLayout} />
            <RouteWithLayout component={PageNotFound} layout={LandingPageLayout}/>
        </Switch>
    </>
);

export default Router;