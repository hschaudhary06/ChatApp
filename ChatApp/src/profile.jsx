import React from "react";
import Profile2 from "./assets/profile_2.png";
import { useNavigate } from 'react-router-dom'

function profile() {
    
    const navigate = useNavigate();

    const redirectToHome = () => {
        navigate("/Home")
    }

  return (
    <div className="main">
      <div className="profile-main">
        <div className="header">
            <div className="btn-back" onClick={redirectToHome}>
                <i className="ri-arrow-left-s-line"></i>
            </div>
            <div className="profile-img-name">
                <img src={Profile2} alt="" />
                <h2>Haidar Ali</h2>
            </div>
        </div>
        <div className="profile-detail">
          <div className="detail-list">
            <div className="field display-name">
                <label htmlFor="name">Display Name</label>
                <h2>Haidar Ali</h2>
            </div>
            <div className="field email">
                <label htmlFor="email">Email Address</label>
                <h2>hs.test@gmail.com</h2>
            </div>
            <div className="field phone-no">
                <label htmlFor="name">Phone Number</label>
                <h2>+91 7359806127</h2>
            </div>
            <div className="field password">
                <label htmlFor="name">Password</label>
                <h2>*********</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default profile;
