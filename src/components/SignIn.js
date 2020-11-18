import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignIn.css';

const SignIn = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className="signin-outer-container">
      <div className="signin-inner-container">
        <h1 className="heading">Social Bees</h1>
        <div>
          <input
            placeholder="Name"
            className="joinInput"
            type="text"
            onChange={(e) => setUser(e.target.value)}
          />
        </div>
        <div>
          <input
            placeholder="Chat Room..."
            className="joinInput mt20"
            type="text"
            onChange={(e) => setRoom(e.target.value)}
          />
        </div>
        <Link
          to={`/chat?user=${name}&room=${room}`}
          onClick={(e) => (!name || !room ? e.preventDefault() : null)}
        >
          <button className="button mt20" type="submit">
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
