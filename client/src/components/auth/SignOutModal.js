import React from 'react'
import { useDispatch } from "react-redux";

import GenericModal from "../services/GenericModal";
import { CLEAR_USER, TOGGLE_MODAL_OFF } from "../../reducers/types";

const SignOutModal = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch({type: CLEAR_USER});
    dispatch({type:TOGGLE_MODAL_OFF});
    sessionStorage.removeItem('jwtToken')
  };

  const bodyContent = () => (
    <div>
      <button onClick={() => handleLogout()}>
        Log out
      </button>
    </div>
  );

  return <GenericModal title='Logout' body={bodyContent()} footer='footer content' name='logout'/>
};

export default SignOutModal;