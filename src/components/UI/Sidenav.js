import React, { useRef } from "react";
import logo from "../../img/logo.png";
import "../UI/Sidenav.css";

const Sidenav = () => {
  const arrowCollapseRef = useRef(null);
  const sidebarRef = useRef(null)

  const handleToggle = (event) => {
    sidebarRef.current.classList.toggle("collapse")
    arrowCollapseRef.current.classList.toggle("collapse");
    if (arrowCollapseRef.current.classList.contains("collapse")) {
      arrowCollapseRef.current.classList =
        "bx bx-arrow-from-left logo-name__icon collapse";
    } else {
      arrowCollapseRef.current.classList = "bx bx-arrow-from-right logo-name__icon";
    }
  };

  return (
    <div className="side-bar" ref={sidebarRef}>
      <div className="logo-name-wrapper">
        <div className="logo-name">
          <img className="logo" alt="logo app" />
          <span className="logo-name__name">Lincoln Botosh</span>
        </div>
        <button className="logo-name__button" onClick={handleToggle}>
          <i
            className="bx bx-arrow-from-right logo-name__icon"
            id="logo-name__icon"
            ref={arrowCollapseRef}
          ></i>
        </button>
      </div>
      <div className="message">
        <i className="message-icon bx bx-message-square-edit"></i>
        <span className="message-text">New Mesage</span>
        <span className="tooltip">New Mesage</span>
      </div>
      <ul className="features-list">
        <li className="features-item inbox active">
          <i className="bx bxs-inbox features-item-icon inbox-icon">
            <span className="status"></span>
          </i>
          <span className="features-item-text">Inbox</span>
          <span className="inbox-number">99</span>
          <span className="tooltip">Inbox</span>
        </li>
        <li className="features-item draft">
          <i className="bx bx-file-blank features-item-icon"></i>
          <span className="features-item-text">Draft</span>
          <span className="tooltip">Draft</span>
        </li>
        <li className="features-item star">
          <i className="bx bx-star features-item-icon"></i>
          <span className="features-item-text">Starred</span>
          <span className="tooltip">Starred</span>
        </li>
        <li className="features-item sent">
          <i className="bx bx-send features-item-icon"></i>
          <span className="features-item-text">Sent</span>
          <span className="tooltip">Sent</span>
        </li>
        <li className="features-item trash">
          <i className="bx bx-trash features-item-icon"></i>
          <span className="features-item-text">Trash</span>
          <span className="tooltip">Trash</span>
        </li>
        <li className="features-item spam">
          <i className="bx bx-message-square-error features-item-icon"></i>
          <span className="features-item-text">Spam</span>
          <span className="tooltip">Spam</span>
        </li>
      </ul>
      {/* <ul className="category-list">
        <div className="category-header">Message categories</div>
        <li className="category-item">
          <span
            className="category-item-status"
            // style="background-color: #79d861"
          ></span>
          <span className="category-item-text">My works</span>
          <span className="category-item-number">9</span>
          <span className="tooltip">My works</span>
        </li>
        <li className="category-item">
          <span
            className="category-item-status"
            // style="background-color: #c43c5d"
          ></span>
          <span className="category-item-text">Accountant</span>
          <span className="category-item-number">43</span>
          <span className="tooltip">Accountant</span>
        </li>
        <li className="category-item">
          <span
            className="category-item-status"
            // style="background-color: #ff5050"
          ></span>
          <span className="category-item-text">Works</span>
          <span className="category-item-number">78</span>
          <span className="tooltip">Works</span>
        </li>
        <li className="category-item">
          <span
            className="category-item-status"
            // style="background-color: #42ffdd"
          ></span>
          <span className="category-item-text">Marketing</span>
          <span className="category-item-number">253</span>
          <span className="tooltip">Marketing</span>
        </li>
      </ul> */}
      {/* <ul className="chat-list">
        <div className="chat-header">recent chats</div>
        <button className="chat-new-btn">
          <i className="bx bxs-plus-circle chat-icon"></i>
          <span className="chat-new-btn-text">Start New Chat</span>
          <span className="tooltip">New Chat</span>
        </button>
        <li className="chat-item">
          <span className="chat-item-avatar-wrapper has-message">
            <img
              src="./assets/images/chris-evans.jpg"
              alt="avatar"
              className="chat-item-avatar"
            />
          </span>
          <span className="chat-item-name">Steve Rogers</span>
          <span className="chat-item-number">53</span>
        </li>
        <li className="chat-item">
          <span className="chat-item-avatar-wrapper">
            <img
              src="./assets/images/tony-stark.jpg"
              alt="avatar"
              className="chat-item-avatar"
            />
          </span>
          <span className="chat-item-name">Tony Stark</span>
          <span
            className="chat-item-status"
            // style="background-color: #79d861"
          ></span>
        </li>
      </ul> */}
    </div>
  );
};

export default Sidenav;
