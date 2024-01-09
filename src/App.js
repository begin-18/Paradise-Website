import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import SecondHeader from './components/SecondHeader'
import './App.css'
import Summit from './components/Summit'
import FooterComponent from './components/FooterComponent'
import Hero2 from './components/Hero2'
import Rates from './components/Rates'
import Gallery from './components/Gallery'
import Book from './components/Book'
// import Feedbacks from './components/Feedbacks'


function App() {

  return (
    <>
      <Header />
      <Hero />
      <Gallery/>
      <Rates/>
      <Hero2/>
      <SecondHeader/>
      {/* <Feedbacks /> */}
      <Book/>
      <Summit/>
      <FooterComponent/>
    </>
  )
}

export default App
