import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Carousel from '../components/Carousel'
import Loader from '../components/Loading/Loader'
import Processing from '../components/Loading/Processing'
import SearchBar from '../components/Search/SearchBar'

export default function Homepage() {
  return (
    <>
    
    <Header />
    {/* <Hero /> */}
    <Carousel />
    </>
  )
}
