import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthProvider } from '../contexts/AuthContext';
import Login from './Login';
import Chats from './Chats';

function App() {
  return (
    <div style={{ fontFamily: 'Avenir' }}>
      <Router>
        {/* <AuthProvider> */}
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/chats" component={Chats} />
        </Switch>
        {/* </AuthProvider> */}
      </Router>
    </div>
  );
}

export default App;
