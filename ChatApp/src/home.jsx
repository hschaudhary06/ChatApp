import React from "react";
import profile from "./assets/profile.png";
import Profile2 from "./assets/profile_2.png";
import Profile3 from "./assets/profile3.png";
import Profile4 from "./assets/profile_4.png";
import Bottom_nav from "./bottom_nav.jsx";

function home() {
  return (
    <div className="main">
      <div className="home-main">
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
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
          <h3>Home</h3>
          <div className="profile-img">
            <img src={profile} alt="" />
          </div>
        </div>
        <div className="user-list">
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
                  <span>How are you today?</span>
                </div>
              </div>
              <div className="active-time">
                <span>2 min ago</span>
                <br />
                <div className="msg-count">3</div>
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
                  <span>what are you doing?</span>
                </div>
              </div>
              <div className="active-time">
                <span>2 min ago</span>
                <br />
                <div className="msg-count">3</div>
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
                  <span>Hey, let's meet today.</span>
                </div>
              </div>
              <div className="active-time">
                <span>2 min ago</span>
                <br />
                <div className="msg-count">3</div>
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
                  <span>How are you today?</span>
                </div>
              </div>
              <div className="active-time">
                <span>2 min ago</span>
                <br />
                <div className="msg-count">3</div>
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
                  <span>How are you today?</span>
                </div>
              </div>
              <div className="active-time">
                <span>2 min ago</span>
                <br />
                <div className="msg-count">3</div>
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
                  <span>what are you doing?</span>
                </div>
              </div>
              <div className="active-time">
                <span>2 min ago</span>
                <br />
                <div className="msg-count">3</div>
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
                  <span>How are you today?</span>
                </div>
              </div>
              <div className="active-time">
                <span>2 min ago</span>
                <br />
                <div className="msg-count">3</div>
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
