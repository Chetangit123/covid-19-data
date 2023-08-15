import React, { useEffect, useState } from 'react'
import './App.css'
import Chart from './Chart'
const DataDisplay = () => {

const [data,setData] = useState([])

  const getCovidData = async () => {
    try {
      const res = await fetch('https://data.covid19india.org/data.json')
      const actualData = await res.json()
      console.log(actualData)
      setData(actualData.statewise[0])
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getCovidData()
  }, [])
  

  return (
    <>
    <section>
      <h1>LIVE DATA</h1>
      <h2>COVID-19 CORONAVIRUS TRACKER</h2>

      <ul>
        <li className='card'>
          <div className='card__main'>
            <div className='card__inner'></div>
            <p className='card__name'><span> OUR </span> COUNTRY </p>
            <p className='card__total card__small'>INDIA</p>
          </div>
        </li>
        <li className='card'>
          <div className='card__main'>
            <div className='card__inner'></div>
            <p className='card__name'><span> TOTAL </span> RECOVERED </p>
            <p className='card__total card__small'>{data.recovered}</p>
          </div>
        </li>
        <li className='card'>
          <div className='card__main'>
            <div className='card__inner'></div>
            <p className='card__name'><span> TOTAL </span> CONFIRMED </p>
            <p className='card__total card__small'>{data.confirmed}</p>
          </div>
        </li>
        <li className='card'>
          <div className='card__main'>
            <div className='card__inner'></div>
            <p className='card__name'><span> TOTAl </span> DEATH </p>
            <p className='card__total card__small'>{data.deaths}</p>
          </div>
        </li>
        <li className='card'>
          <div className='card__main'>
            <div className='card__inner'></div>
            <p className='card__name'><span> TOTAL </span> ACTIVE </p>
            <p className='card__total card__small'>{data.active}</p>
          </div>
        </li>
        <li className='card'>
          <div className='card__main'>
            <div className='card__inner'></div>
            <p className='card__name'><span> LAST </span> UPDATED </p>
            <p className='card__total card__small'>{data.lastupdatedtime}</p>
          </div>
        </li>
      </ul>
      <Chart data={data} />
      </section>
    </>
  )
}

export default DataDisplay
