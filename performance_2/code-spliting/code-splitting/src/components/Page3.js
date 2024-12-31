import React from 'react'
import logo from '../logo.svg'



const Page3 = ({ onRouteChange }) =>
    <div>
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
        </header>
        <div className='center'>
            <h1>this is page 3</h1>
            <button className='disabled'>Page3</button>
            <button onClick={() => onRouteChange('page-1')}>Page1</button>
            <button onClick={() => onRouteChange('page-2')}>Page2</button>
        </div>
    </div>


export default Page3