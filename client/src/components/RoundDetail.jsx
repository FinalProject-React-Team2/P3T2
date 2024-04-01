import { useState } from 'react';

const RoundsComponent = () => {
    const [rounds, setRounds] = useState(0); // Initialize rounds with 0
  
    // Function to handle the increment of rounds
    const handleIncrement = () => {
      setRounds(rounds + 1);
    };
  
    // Function to handle the decrement of rounds
    const handleDecrement = () => {
      setRounds(rounds > 0 ? rounds - 1 : 0); // Prevents negative rounds
    };
  
    // Function to handle round input change
    const handleChange = (event) => {
      const value = parseInt(event.target.value, 10);
      setRounds(isNaN(value) ? 0 : value); // Update only with valid numbers
    };
  
    return (
      <div>
        <h2>Number of Rounds: {rounds}</h2>
        <button onClick={handleIncrement}>Increase</button>
        <button onClick={handleDecrement} disabled={rounds === 0}>Decrease</button>
        <br />
        <label>
          Set Rounds:
          <input type="number" value={rounds} onChange={handleChange} />
        </label>
      </div>
    );
  };
  
  export default RoundsComponent;