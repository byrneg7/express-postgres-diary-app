import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {TOGGLE_MODAL_OFF} from "../../reducers/types";

// HOC for connecting modals to redux store, depends on a name prop in the wrapped component

export const WithModalRedux = Component => function WrapperFn(props) {
    const dispatch = useDispatch();
    const activeModal = useSelector(state => state.modal);

    return <Component {...props} show={activeModal === props.name} handleClose={()=>dispatch({type:TOGGLE_MODAL_OFF})}/>;
};