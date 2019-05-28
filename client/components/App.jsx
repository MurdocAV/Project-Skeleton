import React from 'react'
import HomePageCard from './HomePageCard'
import Nav from './Nav'
import Content from './content/Content'
import Footer from './footer/Footer'

const App = () => {
  return (
    <React.Fragment>
      <h1>React Skeleton</h1>
      <Nav />
      <Content />
      <HomePageCard />
      <Footer />
    </ React.Fragment>
  )
}

export default App

