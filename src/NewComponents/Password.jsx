import React from 'react'
import './Username.css'

function Password() {
  return (
    <div>
         <form>
            <div className='input-div'>
                <label htmlFor="password">Password</label>
                <br />
                <input type="password" placeholder='Password' className='input' id='password' required />
            </div>
        </form>
    </div>
  )
}

export default Password