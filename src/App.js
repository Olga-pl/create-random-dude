import './App.css';
import { useState, useEffect } from 'react'
import RandomDude from "./components/RandomDude"

import JsonData from './data/data.json'

const App = () => {
  const [landingPageData, setLandingPageData] = useState({})
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLandingPageData(JsonData);
    setLoading(false);
    window.scrollTo(0, 0)
    
  }, [])

  if(loading)return <h1>LOADING</h1>


  return (
    <div className="App">
            <RandomDude data={landingPageData.Assets}/>
    </div>
  );
}

export default App
