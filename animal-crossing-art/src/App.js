import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>
        Animal Crossing: New Horizons Completionist's Guide
      </h1>
      <div className="container">
        <div className="table top">
          <div className="row">
            <div className="checkbox-container">
              <input type="checkbox"></input>
            </div>
            <img src="https://gamewith-en.akamaized.net/article_tools/animal-crossing-new-horizons/gacha/a18_r.png"></img>
            <text>Academic Painting</text>
          </div>
        </div>
        <h2 className="completed-label">
          Completed
        </h2>
        <div className="table bottom">
         <div className="row">
           <div className="checkbox-container">
             <input type="checkbox"></input>
           </div>
            <img src="https://gamewith-en.akamaized.net/article_tools/animal-crossing-new-horizons/gacha/a18_r.png"></img>
            <text>Academic Painting</text>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
