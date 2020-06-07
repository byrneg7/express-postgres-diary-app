import React from 'react';
import {useDispatch} from "react-redux";
import {TOGGLE_MODAL_ON} from "../../reducers/types";

const LandingNav = () => {
    const dispatch = useDispatch();

    return (
        <nav className="navbar navbar-light bg-light static-top">
            <div className="container">
                <a className="navbar-brand" href="#">Start Bootstrap</a>
                <a onClick={()=>dispatch({type: TOGGLE_MODAL_ON, payload: 'signup'})} className="btn btn-primary" href="#">Sign Up</a>
            </div>
        </nav>
    )
};

export default LandingNav;