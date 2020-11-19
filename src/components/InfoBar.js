import React from 'react';
import './InfoBar.css';
import closeIcon from '../Icons/closeIcon.png';
import onlineIcon from '../Icons/onlineIcon.png';

const InfoBar = ({ room }) => (
  <div className="infoBar">
    <div className="left-inner-container">
      <img className="onlineIcon" src={onlineIcon} alt="" />
      <h3>{room}</h3>
    </div>
    <div className="right-inner-container">
      <a href="/">
        <img className="closeIcon" src={closeIcon} alt="" />
      </a>
    </div>
  </div>
);

export default InfoBar;
