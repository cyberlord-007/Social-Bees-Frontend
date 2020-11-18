import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import SignIn from './components/SignIn';

const App = () => (
  <BrowserRouter>
    <Route path="/" exact component={SignIn} />
  </BrowserRouter>
);

export default App;
