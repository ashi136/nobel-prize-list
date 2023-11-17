import React from 'react'
import '../index.css'
import {Link} from 'react-router-dom'
export default function Home() {
  return (
    <div className='home'  >
        <div className='about'>
          <h2 className='m-3'>This web app is to  showcase Nobel prize winners for the last 100 years</h2>  
          <Link to='/list' className='btn btn-danger m-3'><b>Get the list</b></Link>
        </div>
    </div>
  )
}
