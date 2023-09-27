import React from 'react'
import '../style/signup.css'

export default function SignUpForm() {
  return (
    <div className='signupForm'>
      <p>Ready to watch? Enter your email to create or restart your membership.</p>
      <div className='inputcont'>
        <div className='inputcard'>
          <input type="email" required />
          <label>Email address</label>
        </div>
        <button>Get started</button>
      </div>
    </div>
  )
}
