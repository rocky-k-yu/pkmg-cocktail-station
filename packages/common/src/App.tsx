import React from "react";
import { Router, Route } from './shared/Routing';
import HomeScreen from './routes/HomeScreen';
import WelcomeScreen from './routes/WelcomeScreen';
import MiniAppScreen from './routes/MiniAppScreen'
import IamRouter from './routes/IamRouter';

const App = () => (
  <Router>
    <Route exact path="/" component={WelcomeScreen} />
    <Route path="/Home" component={HomeScreen} />
    <Route path="/MiniApp" component={MiniAppScreen} />
    <Route path="/login/" render={IamRouter} />
  </Router>
);


export default App;