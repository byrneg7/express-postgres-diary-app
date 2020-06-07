import React, {useState} from 'react';
import {withRouter} from "react-router";

import Banner from "../banners/Banner";
import IconGroup from "./IconGroup";
import ImageShowCase from "./ImageShowCases";
import './landingPage.scss';
import Testimonials from "./Testimonials";
import CallToAction from "../banners/CallToAction";
import {makeToast} from "../services/toast";
import {apiClient} from "../../services/axiosConfig";

const LandingPage = ({history}) => {
    const [chatroomName, setChatroomName] = useState('');

    const handleChange = e => setChatroomName(e.target.value);

    const handleSubmit = e => {
        e.preventDefault();
        if (isValid()) {
            createChatroom()
        } else {
            makeToast('error', 'Name must be 6 characters or greater')
        }
    };

    const isValid = () => chatroomName.length > 6;

    const createChatroom = () => {
        apiClient.post('/chatrooms', {name: chatroomName})
            .then(res => {
                if (res && res.data) {
                    console.log(res.data.data.id)
                    history.push(`/chatrooms/${res.data.data.id}`)
                }
            })
            .catch(err => makeToast('error', err.message))
    };

    const renderBannerBody = () =>
        <form onSubmit={handleSubmit}>
            <div className="form-row">
                <div className="col-12 col-md-9 mb-2 mb-md-0">
                    <input type="text" className="form-control form-control-lg" placeholder="Chatroom name..."
                           onChange={handleChange}/>
                </div>
                <div className="col-12 col-md-3">
                    <button type="submit" className="btn btn-block btn-lg btn-primary">Create</button>
                </div>
            </div>
        </form>;

    return (
        <>
            <Banner body={renderBannerBody()} title='Create a chatroom and invite your friends instantly'/>
            <IconGroup/>
            <ImageShowCase/>
            <Testimonials/>
            <CallToAction/>
        </>
    )
};

export default withRouter(LandingPage);