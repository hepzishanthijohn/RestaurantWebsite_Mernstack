import Carousel from '../components/carousel/Carousel'
import React from 'react'
import Menu from '../components/menu/Menu'
import Footer from '../components/footer/Footer'
import Reservation from '../components/reservation/Reservation'
import Header from './header/Header'

const MainPage = () => {
  return (
    <>
    <Header/>
    <Carousel/>
    <Menu/>
  
    <Footer/>
    </>
  )
}

export default MainPage