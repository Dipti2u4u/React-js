import React from 'react';
import './Temp.css';

const Temp = () => {
  return (
    <div className='box'>
      <div className='inputData'>
        <input type = "search" className='inputField' 
        onChange={ (event) => {

        }} />
      </div>
      <div className='info'>
        <h2 className='location'>
          <i class="fa-duotone fa-street-view">Bhubaneswar</i>
        </h2>
      </div>

    </div>
  )
}

export default Temp

