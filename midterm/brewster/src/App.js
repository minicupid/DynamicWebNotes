import React, { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import mainbg from './assets/mainbg.jpeg'

// comps
import Navbar from './components/Navbar'
import Splash from './pages/Splash'

// pages
import BrewPage from './pages/BrewPage'
import HistoryPage from './pages/HistoryPage'
import PhilosophyPage from './pages/PhilosophyPage'

export default function App() {
  const [cups, setCups] = useState([]); // rerender page when cups array changes

  // func to push new cup to cups array when 'brew'
  const addCup = (cupData) => { // grab activities and mood data from BrewPage
    const newCup = {
      id: new Date().toISOString(),
      ...cupData, // spread mood and activities into newCup obj
      status: "complete"
    };
    setCups(prevCups => [...prevCups, newCup]); // spread prevCups and add newCup
  };

  return (
    <Router>
      <div className="app flex justify-center items-center h-screen w-screen"
      style={{
        backgroundImage: `url(${mainbg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
      >
          <div className="[cont] w-full h-full flex items-center justify-center">
            <div className="[card-container] w-4/5 h-5/6 rounded-xl shadow-xl glass-card"
            >
              <Navbar />
              <div className="[ page-container ] ml-40 h-full">
                <Routes>
                  <Route path="/" element={<Splash />} />
                  <Route path="/brew" element={<BrewPage addCup={addCup} />} />
                  <Route path="/history" element={<HistoryPage cups={cups} />} />
                  <Route path="/philosophy" element={<PhilosophyPage />} />
                </Routes>
              </div>
            </div>
        </div>
      </div>
    </Router>
  );
}