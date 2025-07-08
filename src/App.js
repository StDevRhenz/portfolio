import logo from './logo.svg';
import React from 'react';
import Button from './components/button.jsx';
import Card from './components/Card.jsx';
import CardCounter from './components/CardCounter.jsx';
import './App.css';

const cardData = {
  card1: {
    cardName: "Card 1",
    description: "Description 1"
  },
  card2: {
    cardName: "Card 2",
    description: "Description 2"
  },
  card3: {
    cardName: "Card 3",
    description: "Description 3"
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button/>
        <Card {...cardData.card1}/>
        <Card {...cardData.card2}/>
        <Card {...cardData.card3}/>

        <CardCounter/>
        
      </header>
    </div>
  );
}

export default App;
