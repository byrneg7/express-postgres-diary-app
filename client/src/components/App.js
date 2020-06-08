import React, { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from "react-redux";

import Router from "../routes/router";
import Modals from "./modals/Modals";
import apiClient from "../services/axiosConfig";
import { FETCH_USER } from "../reducers/types";


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = sessionStorage.getItem('jwtToken')
    if (token) {
      apiClient.get('/user')
        .then(res => dispatch({type: FETCH_USER, payload: res.data}))
        .catch(err => console.log(err))
    }
  }, []);

  return (
    <>
      <Router/>
      <ToastContainer position="top-right" closeOnClick autoClose={5000}/>
      <Modals/>
    </>
  );
}

export default App;
