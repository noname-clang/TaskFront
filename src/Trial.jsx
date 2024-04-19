import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './Form.css'

function FormTrial() {

  return (
    <>
    <div className='arrumarpos'>
        <input id='btnpromo'type="button" value='Tye it free 7 days then $20/mo. thereafter' />
      <div className='formtrialfree'>
        <input type="text"  required="true" placeholder='Name'/>
        <input type="text"  required="true"placeholder='Last Name'/>
        <input type="email" required="true" placeholder='Email Address'/>
        <input type="password"  required="true"placeholder='Password'/>
        <input id='trialbtn' type="button" value="CLAIM YOUR FREE TRIAL" />
        <div className='sameline'> 
            <h6>By clicking this button, you are agressing to our </h6>
            <h6 id='terms'>  Terms and Services</h6>
            </div>
      </div>
      </div>
    </> 
  )
}

export default FormTrial
