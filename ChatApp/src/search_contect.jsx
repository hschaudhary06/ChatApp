import React from "react";
import profile from "./assets/profile.png";
import Profile2 from "./assets/profile_2.png";
import Profile3 from "./assets/profile3.png";
import Profile4 from "./assets/profile_4.png";
import Bottom_nav from "./bottom_nav.jsx";

function home() {
  return (
    <div className="main">
      <div className="search-main">
        <div className="search-header">
            <i class="ri-search-line"></i>
            <input type="text" placeholder="Search contect" />
            <i class="ri-close-fill"></i>
        </div>

        <div className="search-list">
          <div className="user-profile">
            <div className="sub-user-profile">
              <div
                style={{ display: "flex", alignItems: "center", gap: "15px" }}
              >
                <div className="user-img">
                  <img src={Profile2} alt="" />
                </div>
                <div className="user-name">
                  <h2>Hasan Abbas</h2>
                  <span>+91 9976549020</span>
                </div>
              </div>
            </div>
            <div className="sub-user-profile">
              <div
                style={{ display: "flex", alignItems: "center", gap: "15px" }}
              >
                <div className="user-img">
                  <img src={Profile3} alt="" />
                </div>
                <div className="user-name">
                  <h2>Akbar hussain</h2>
                  <span>+91 9976549020</span>
                </div>
              </div>
             
            </div>
            <div className="sub-user-profile">
              <div
                style={{ display: "flex", alignItems: "center", gap: "15px" }}
              >
                <div className="user-img">
                  <img src={profile} alt="" />
                </div>
                <div className="user-name">
                  <h2>Salaman Haidar</h2>
                  <span>+91 9976549020</span>
                </div>
              </div>
             
            </div>
            <div className="sub-user-profile">
              <div
                style={{ display: "flex", alignItems: "center", gap: "15px" }}
              >
                <div className="user-img">
                  <img src={Profile2} alt="" />
                </div>
                <div className="user-name">
                  <h2>Shakir ali</h2>
                  <span>+91 9976549020</span>
                </div>
              </div>
             
            </div>
            <div className="sub-user-profile">
              <div
                style={{ display: "flex", alignItems: "center", gap: "15px" }}
              >
                <div className="user-img">
                  <img src={Profile4} alt="" />
                </div>
                <div className="user-name">
                  <h2>Shakir ali</h2>
                  <span>+91 9976549020</span>
                </div>
              </div>
             
            </div>
            <div className="sub-user-profile">
              <div
                style={{ display: "flex", alignItems: "center", gap: "15px" }}
              >
                <div className="user-img">
                  <img src={Profile3} alt="" />
                </div>
                <div className="user-name">
                  <h2>Akbar hussain</h2>
                  <span>+91 9976549020</span>
                </div>
              </div>
             
            </div>
            <div className="sub-user-profile">
              <div
                style={{ display: "flex", alignItems: "center", gap: "15px" }}
              >
                <div className="user-img">
                  <img src={Profile2} alt="" />
                </div>
                <div className="user-name">
                  <h2>Shakir ali</h2>
                  <span>+91 9976549020</span>
                </div>
              </div>
             
            </div>
          </div>
        </div>
        <Bottom_nav />
      </div>
    </div>
  );
}

export default home;
