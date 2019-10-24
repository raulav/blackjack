import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <button></button>
      <button></button>
      <button></button>
      <PlayerCard/>
      <DealerCard/>
      <Outcome></Outcome>
    </div>
  );
}


const PlayerCard = () => {
  return (
    <div>
      <h1>Player's Score</h1>
    </div>
  );
}

const DealerCard = () => {
  return (
    <div>
      <h1>Dealer's Score</h1>
    </div>
  );
}

const Outcome = () => {
  return (
    <div>
      <h1>Winnder/loser</h1>
    </div>
  )
}
export default App;
