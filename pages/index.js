import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';

const App = () => (
  <Router>
    <GlobalStyles />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/contact" component={ContactPage} />
    </Switch>
  </Router>
);

export default App;
