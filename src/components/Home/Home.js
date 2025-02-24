import React from 'react'
import "./Home.css"

const Home = () => {
  const [stockName, changeStockname] = React.useState();
  const [bestMatches, changeBestMatches] = React.useState([]);

  const changeInputSearch = async (event) => {
    changeStockname(event.target.value)
    await fetch(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${event.target.value}&apikey=R4J7WFSE2XXYOORR`)
      .then((response) => response.json())
      .then((data) => changeBestMatches(data))
  }

  const searchStockName = async () => {
    await fetch(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${stockName}&apikey=R4J7WFSE2XXYOORR`)
      .then((response) => response.json())
      .then((data) => console.log(data))

  }

  console.log(bestMatches)

  return (
    <div className='home'>
      <div className='searchContainer'>
        <input type="search" className='search' onKeyDown={changeInputSearch} onChange={changeInputSearch} />
        <button onClick={searchStockName}>Search</button>
      </div>
      <hr />
      <p className='copyright'>Copyright © 2025 Madan. All rights reserved.</p>
    </div>
  )
}

export default Home
