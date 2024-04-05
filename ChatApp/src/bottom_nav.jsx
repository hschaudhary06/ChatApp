import React from 'react'
import { useNavigate } from 'react-router-dom'

function bottom_nav() {

    const navigate = useNavigate();

    const redirectToHome = () => {
        navigate("/Home")
    }

    const redirectToContect = () => {
        navigate("/Contects")
    }

    const redirectToProfile = () => {
        navigate("/Profile")
    }
    return (
        <div className='bottom-nav'>
            <div className='btn-tab' onClick={redirectToHome}>
                <i className="ri-chat-1-line"></i>
                <p>Message</p>
            </div>
            <div className='btn-tab' onClick={redirectToContect}>
                <i className="ri-contacts-line"></i>
                <p>Contects</p>
            </div>
            <div className='btn-tab' onClick={redirectToProfile}>
                <i className="ri-account-pin-circle-line"></i>
                <p>Profile</p>
            </div>
            {/* <div className='btn-tab'>
                <i className="ri-settings-4-line"></i>
                <p>Settings</p>
            </div> */}
        </div>
    );
}

export default bottom_nav