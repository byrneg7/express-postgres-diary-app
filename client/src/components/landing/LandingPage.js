import React, { useState } from 'react';
import { withRouter } from "react-router";

import Banner from "../banners/Banner";
import IconGroup from "./IconGroup";
import ImageShowCase from "./ImageShowCases";
import './landingPage.scss';
import Testimonials from "./Testimonials";
import CallToAction from "../banners/CallToAction";
import { makeToast } from "../services/toast";
import apiClient from "../../services/axiosConfig";
const LandingPage = ({history}) => {
  return (
    <>
      <Banner title='Notes App' subtitle='Document, discuss and organize your day'/>
      <IconGroup/>
      <ImageShowCase/>
      <Testimonials/>
      <CallToAction/>
    </>
  )
};

export default withRouter(LandingPage);