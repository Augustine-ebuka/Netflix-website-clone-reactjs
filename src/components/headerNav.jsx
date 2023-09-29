import React from 'react'
import '../style/headerNav.css'
import logo from '../images/Netflix_Logo_PMS.png'

export default function HeaderNav() {
  return (
    <div className='headerContainer'>
      <div className='headerContent'>
        <div className='logo'>
          <img src={logo} alt='logo' height={70} />
        </div>
        <div className='sigup'>
          <div className='button'>sig up</div>
        </div>
     </div>
    </div>
  )
}
