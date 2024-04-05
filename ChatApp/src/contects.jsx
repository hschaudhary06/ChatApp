import React from "react";
import profile from "./assets/profile.png";
import Profile2 from "./assets/profile_2.png";
import Profile3 from "./assets/profile3.png";
import Profile4 from "./assets/profile_4.png";
import Bottom_nav from "./bottom_nav.jsx";

function home() {
  return (
    <div className="main">
      <div className="contect-main">
        <div className="header">
          <a href="#">
            <svg
              width="30"
              height="30"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.9583 16.9583L20.1666 20.1667M19.2499 10.5417C19.2499 5.7322 15.3511 1.83334 10.5416 1.83334C5.73211 1.83334 1.83325 5.7322 1.83325 10.5417C1.83325 15.3512 5.73211 19.25 10.5416 19.25C15.3511 19.25 19.2499 15.3512 19.2499 10.5417Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <h3>Contects</h3>
          <div className="add-contect">
            <svg
              width="35"
              height="35"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse
                cx="10"
                cy="17.5"
                rx="7"
                ry="3.5"
                stroke="white"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <circle
                cx="10"
                cy="7"
                r="4"
                stroke="white"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <path
                d="M21 11H17"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M19 9L19 13"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
        <div className="contect-list">
            <div className="title"><h2>My contect</h2></div>
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
