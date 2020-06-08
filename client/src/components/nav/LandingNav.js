import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { TOGGLE_MODAL_ON } from "../../reducers/types";

const LandingNav = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  const handleAuth = () => {
    return user ?
      <a onClick={() => dispatch({type: TOGGLE_MODAL_ON, payload: 'logout'})} className="btn btn-primary" href="#">
        Logout
      </a> :
      <a onClick={() => dispatch({type: TOGGLE_MODAL_ON, payload: 'signup'})} className="btn btn-primary" href="#">
        Sign Up
      </a>
  };

  return (
    <nav className="navbar navbar-light bg-light static-top">
      <div className="container">
        <a className="navbar-brand" href="#">Start Bootstrap</a>
        {handleAuth()}
      </div>
    </nav>
  )
};

export default LandingNav;