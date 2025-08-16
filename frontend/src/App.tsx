import React from 'react';
import './App.css';
import XLogo from './img/x.png';
import LinkedInLogo from './img/linkedin.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Anime Quote Generator</h1>
      </header>
      <main className="App-main">
        <div className="quote-container">
          <p>“Knowing what it feels to be in pain, is exactly why we try to be kind to others.”</p>
          <h2>Jiraiya (Naruto)</h2>
        </div>
        <button className="quote-button">Get Another Quote</button>
      </main>
      <footer className="App-footer">
        <img className='social-icons' src={XLogo} alt="A picture of x.com aka Twitter logo" />
        <img className='social-icons' src={LinkedInLogo}alt="A picture of linkedin logo" />
      </footer>
    </div>
    
  );
}

export default App;
