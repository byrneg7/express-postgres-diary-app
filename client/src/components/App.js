import React, {useEffect} from 'react';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useDispatch} from "react-redux";

import Router from "../routes/router";
import Modals from "./modals/Modals";
import {apiClient} from "../services/axiosConfig";
import {AUTH} from "../reducers/types";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        loginStatus()
    }, []);

    const loginStatus = () => {
        apiClient.get('/logged_in', {withCredentials: true})
            .then(res => {
                if (res.data && res.data.data && res.data.data.type === 'user') {
                    handleLoggedIn(res.data.data.attributes)
                }
            })
            .catch(error => console.log('api errors:', error))
    };

    const handleLoggedIn = (user) => dispatch({type: AUTH, payload: user});

    return (
        <>
            <Router/>
            <ToastContainer position="top-right" closeOnClick autoClose={5000}/>
            <Modals/>
        </>
    );
}

export default App;
