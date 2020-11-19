import React from 'react';
import { IoMdSend } from 'react-icons/io';
import './Input.css';

const Input = ({ message, setMessage, sendMessage }) => (
  <form className="form">
    <input
      type="text"
      className="input"
      placeholder="Type something..."
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      onKeyPress={(e) => (e.key === 'Enter' ? sendMessage(e) : null)}
    />
    <button className="sendButton" onClick={(e) => sendMessage(e)}>
      <IoMdSend color={'white'} size={'35px'} />
    </button>
  </form>
);

export default Input;
