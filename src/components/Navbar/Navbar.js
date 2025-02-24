import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from '../Home/Home';
import CoreStock from '../CoreStock/CoreStock';
import Options from '../Options/Options';
import stockMarketLogo from "../images/stockMarketLogo.jpg"
import FundementalData from '../FundementalData/FundementalData';
import Forex from '../Forex(FX)/Forex';
import CryptoCurrencies from '../CryptoCurrencies/CryptoCurrencies';
import Commodities from '../Commodities/Commodities';
import EconomicIndicators from '../EconomicIndicators/EconomicIndicators';
import "./Navbar.css"


const Navbar = () => {
  return (
    <div>
        <BrowserRouter>
            <nav className='nav'>
                <Link to = "/"><img src = {stockMarketLogo} className='logo'/></Link>
                <Link to = "/core_stock" className='navElements'>Core Stock</Link>
                <Link to = "/options" className='navElements'>Options</Link>
                <Link to = "/fundementals" className='navElements'>Fundemental Data</Link>
                <Link to = "/forex" className='navElements'>Forex(FX)</Link>
                <Link to = "/cryptocurrencies" className='navElements'>Crypto Currencies</Link>
                <Link to = "/commodities" className='navElements'>Commodities</Link>
                <Link to = "/economicindicators" className='navElements'>Economic Indicators</Link>
            </nav>
            <Routes>
                <Route path = "/" element = {<Home />} />
                <Route path = "/core_stock" element = {<CoreStock />} />
                <Route path = "/options" element = {<Options />} />
                <Route path = "/fundementals" element = {<FundementalData />} />
                <Route path = "/forex" element = {<Forex />} />
                <Route path = "/cryptocurrencies" element = {<CryptoCurrencies />} />
                <Route path = "/commodities" element = {<Commodities />} />
                <Route path = "/economicindicators" element = {<EconomicIndicators />} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Navbar
