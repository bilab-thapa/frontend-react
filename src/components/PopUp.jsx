import React from 'react'
import './PopUp.css'

function PopUp(props) {
  return(props.trigger)? ( 
    <div className='popup'>
        <div className='popup-inner'>
            <button className='close-btn'>
                Close
            </button>
        </div>
    </div>
  )
  : "";
}


export default PopUp
