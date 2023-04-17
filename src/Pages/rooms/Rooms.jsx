import React from 'react';
import './Rooms.css'

const Rooms = (props) => {
  return (
    <section>
      <div className='containe'>
        <h1>ROOMS</h1>
      
      <div className='card-container'>
        <div className='card-title'>
          <h3>{props.id}</h3>
        </div>
        <div class="grid-container">
          <div class="grid-item"><h2>Room Name : </h2></div>
          <div class="grid-item">
            <div className='card-name'>
              <h2>{props.name}</h2>
            </div>
          </div>
          <div class="grid-item"><h2>Participants : </h2></div>  
          <div class="grid-item">
            <div className='card-participants'>
              <h2>{props.participants}</h2>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}

export default Rooms