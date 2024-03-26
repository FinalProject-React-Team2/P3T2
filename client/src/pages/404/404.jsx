import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home'; // Assuming you have a Home component
import NotFound from './NotFound'; // Import the NotFound component

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* Define other routes here */}
        {/* Catch-all route for 404 errors */}
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;