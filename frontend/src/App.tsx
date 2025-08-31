import React, { useEffect, useState } from 'react';
import './App.css';
import XLogo from './img/x.png';
import LinkedInLogo from './img/linkedin.png';

interface QuoteType {
  id: number;
  text: string;
}

function App() {

  const [quote, setQuote] = useState<QuoteType | null>(null)

  async function getData(){
    const randomId = Math.floor(Math.random() * 7) + 1;
    const params = new URLSearchParams();
    const url = `http://localhost:5000/quote?id=${randomId}`;
    
    try {
      const response = await fetch(url);
      if(!response.ok){
        throw new Error(`Response status: ${response.status}`)
      }

      const result = await response.json();
      setQuote(result);
      console.log(result)
    }catch(error){
      console.error(error)
    }
  }

  useEffect(()=>{
      getData();
    }, []);

    if(!quote) return <p>Loading...</p>;

    
  return (
    <div className="App">
      <header className="App-header">
        <h1>Anime Quote Generator</h1>
      </header>
      <main className="App-main">
        <div className="quote-container">
          <p>{quote.text}</p>
        </div>
        <button className="quote-button" onClick={() => getData()}>Get Another Quote</button>
      </main>
      <footer className="App-footer">
        <img className='social-icons' src={XLogo} alt="A picture of x.com aka Twitter logo" />
        <img className='social-icons' src={LinkedInLogo}alt="A picture of linkedin logo" />
      </footer>
    </div>
    
  );
}
export default App;
