import React from 'react';
import SignInModal from "../auth/SignInModal";
import SignUpModal from "../auth/SignUpModal";
import SignOutModal from "../auth/SignOutModal";

const Modals = () => {
  return (
    <>
      <SignInModal/>
      <SignUpModal/>
      <SignOutModal/>
    </>
  )
};

export default Modals;