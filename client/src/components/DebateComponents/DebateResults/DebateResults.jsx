import React, { useState } from 'react';
import './App.css';
import ResultDisplay from './ResultDisplay';


function App() {
  // Simulated result data
  const [results] = useState([
    { label: 'Score', value: '85%' },
    { label: 'Correct Answers', value: '17' },
    { label: 'Incorrect Answers', value: '3' },
  ]);

  return (
    <div className="App">
      <header className="App-header">
        {/* Pass the simulated results data to the ResultDisplay component */}
        <ResultDisplay results={results} />
      </header>
    </div>
  );
}

export default App;
