import React from 'react'
import './Popup.css'

function Popup(props) {
  return (props.trigger) ? (
    <div>
      <div className='popup'>
        <div className='popup-inner'>
          {/* <button className='close-btn bg-slate-100'>close</button> */}
          {/* <p>sdafsd</p> */}
          { props.children }
        </div>

      </div>
    </div>
  ): "";
}

export default Popup

