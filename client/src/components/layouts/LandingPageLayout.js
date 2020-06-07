import React from 'react';
import LandingNav from "../nav/LandingNav";
import Footer from "../footer/Footer";

const LandingPageLayout = ({children}) => {
  return (
    <>
      <LandingNav/>
      {children}
      <Footer/>
    </>
  )
};

export default LandingPageLayout;