import React from 'react'
import '../style/homePage.css'
import SignUpForm from './signUp'
import HeaderNav from './headerNav'

export default function HeroPage() {
  return (
    <>
    <HeaderNav></HeaderNav>
      <section class="background-section">
        <div class="overlay"></div>
        <div class="content">
          <h1>Unlimited movies, TV shows, and more</h1>
          <p>Watch anywhere. Cancel anytime.</p>
          <SignUpForm></SignUpForm>
        </div>
      </section>
    </>
  )
}
