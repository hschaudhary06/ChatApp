import React from "react";
import Profile2 from "./assets/profile_2.png";
import Profile3 from "./assets/profile3.png";
import { useNavigate } from 'react-router-dom'

function chat() {

  const navigate = useNavigate();

  const redirectToHome = () => {
      navigate("/Home")
  }
  return (
    <div className="main">
      <div className="chat-main">
          <div className="chat-header">
            <a href="#" onClick={redirectToHome}>
              <i className="ri-arrow-left-s-line"></i>
            </a>
            <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
              <div className="chatter-img">
                <img src={Profile2} alt="" />
              </div>
              <div className="chatter-name">
                <h2>Hasan Abbas</h2>
                <span>Active Now</span>
              </div>
            </div>
          </div>
          <div className="messages-chat">
            <div className="msges-date">
              <p>Today</p>
            </div>
            <div className="message text-only">
              <div className="send">
                <p className="text">
                  Hello, Haidarali
                </p>
              </div>
            </div>
            <p className="time">9:30 AM</p>
            <div className="message text-only">
              <div className="response">
                <p className="text">
                  Hello, Hasan Abbas How are you?
                </p>
              </div>
            </div>
            <div className="message text-only">
              <div className="response">
                <p className="text">When can we meet ?</p>
              </div>
            </div>
            <p className="response-time time">9:30 AM</p>
            <div className="message text-only">
              <div className="send">
                <p className="text">
                  We can meet on 5th April.
                </p>
              </div>
            </div>
            <p className="time">9:30 AM</p>
            <div className="message text-only">
              <div className="response">
                <p className="text">Okk i will wait for you.</p>
              </div>
            </div>
            <p className="response-time time">9:30 AM</p>
            <div className="message text-only">
              <div className="send">
                <p className="text">
                  okk then i'll come on 5th April.
                </p>
              </div>
            </div>
            <p className="time">9:30 AM</p>
            <div className="message text-only">
              <div className="send">
                <p className="text">
                  and tell me about you.
                </p>
              </div>
            </div>
            <p className="time">9:30 AM</p>
            <div className="message text-only">
              <div className="response">
                <p className="text">Nothing Bro.</p>
              </div>
            </div>
            <p className="response-time time">9:30 AM</p>
            <div className="message text-only">
              <div className="response">
                <p className="text">And what about you?</p>
              </div>
            </div>
            <p className="response-time time">9:30 AM</p>
          </div>
          <div className="msg-input">
            <form>
              <input type="text" id="msg-text" placeholder="Write your message" />
              <button><i className="ri-send-plane-fill"></i></button>
            </form>
          </div>
        </div>
    </div>
  );
}

export default chat;
