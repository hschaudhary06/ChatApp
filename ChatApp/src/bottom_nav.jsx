import React from 'react'

function bottom_nav() {

    return (
        <div className='bottom-nav'>
            <div className='btn-tab'>
                <i className="ri-chat-1-line"></i>
                <p>Message</p>
            </div>
            <div className='btn-tab'>
                <i className="ri-contacts-line"></i>
                <p>Contects</p>
            </div>
            <div className='btn-tab'>
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