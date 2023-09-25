import React from 'react'
import './Loader.css'

function Loader() {
  return (
    <div className="global-loader">
        <div className='loader-container'>
            <div className="ring"></div>
            <div className="ring"></div>
            <div className="ring"></div>
            <p>Loading...</p>
        </div>
    </div>
  )
}

export default Loader;