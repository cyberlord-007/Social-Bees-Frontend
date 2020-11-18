import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import SignIn from './components/SignIn';
import Chat from './components/Chat';

const App = () => (
  <BrowserRouter>
    <Route path="/" exact component={SignIn} />
    <Route path="/chat" component={Chat} />
  </BrowserRouter>
);

export default App;
