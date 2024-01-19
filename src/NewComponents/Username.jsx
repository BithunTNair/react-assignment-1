import React from 'react'
import './Username.css'

function Username() {
  return (
    <div>
        <form>
            <div className='input-div'>
                <label htmlFor="username">Username</label>
                <br />
                <input type="text" placeholder='Username' className='input' id='username' required />
            </div>
        </form>
    </div>
  )
}

export default Username