import './App.css';
import React, { useState, useEffect } from 'react'
import Video from './bg.mp4'

function App() {
  const [country, setcountry] = useState("")
  const [allcountry, setallcountry] = useState([])
  const [countryinfo, setcountryinfo] = useState({})
  
  useEffect(() => {
    fetchcounntries();
    worldData()
  }, [])

  const fetchcounntries = async () => {
    const url = `https://disease.sh/v3/covid-19/countries`
    const country_data = await fetch(url)
    const res = await country_data.json()
    setallcountry(res)

  }

  const worldData = async ()=>{
    const url = `https://disease.sh/v3/covid-19/all`
    const world_data = await fetch(url)
    const res = await world_data.json()
    setcountryinfo(res)
    
  }


  const submit = (e, country) => {
    e.preventDefault();
    const CountryName = country
    const nameCapitalized = CountryName.charAt(0).toUpperCase() + CountryName.slice(1)
    const id = allcountry.findIndex(li => li.country === nameCapitalized)
    console.log(id)
    const countrydata = allcountry[id]
    console.log(countrydata)
    setcountryinfo(countrydata)
  }
  return (
    <div className="App">
    <div className="header">
      <center><h2>Corona Tracker</h2></center>
      
      </div>

      <div className="card_box">
          
          <input className="input" list="countries" name="myBrowser" onChange={(e) => setcountry(e.target.value)} placeholder="Country Name" />
              <datalist id="countries">
                {allcountry.map(li => (<option value={li.country} onChange={(e) => setcountry(e.target.value)} />))}
              </datalist>
          <button className="btn" onClick={(e) => submit(e, country)}>Submit</button><br />
          <div className="card">

              <h2 className="country">{countryinfo.country}</h2>
              <p><span>Active</span> : {countryinfo.active}</p>
              <p><span>Deaths</span> : {countryinfo.deaths}</p>
              <p><span>Recoverd</span> : {countryinfo.recovered}</p>
              <p><span>Total Cases</span> : {countryinfo.cases}</p>
                
          </div>
      </div>

     


      <div className="footer">
      <p>Done By Subba Rao , Sri Harsha @2021</p>
      
      </div>


      

    </div>
  );
}

export default App;
