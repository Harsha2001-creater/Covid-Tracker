import './App.css';
import React, { useState, useEffect } from 'react'

function App() {
  const [country, setcountry] = useState("india")
  const [allcountry, setallcountry] = useState([])
  const [countryinfo, setcountryinfo] = useState({})
  useEffect(() => {
    fetchcounntries()
  }, [])

  const fetchcounntries = async () => {
    const url = `https://disease.sh/v3/covid-19/countries`
    const counntry_data = await fetch(url)
    const res = await counntry_data.json()
    console.log(res)
    setallcountry(res)

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

      <input list="countries" name="myBrowser" onChange={(e) => setcountry(e.target.value)} />
      <datalist id="countries">
        {allcountry.map(li => (<option value={li.country} onChange={(e) => setcountry(e.target.value)} />))}
      </datalist>
      <button onClick={(e) => submit(e, country)}>Submit</button><br />
      {countryinfo.active}

    </div>
  );
}

export default App;
