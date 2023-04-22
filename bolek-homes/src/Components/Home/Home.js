import React from 'react'
import Layout from '../../Layout/Layout'
import Hero from './Blocks/Hero'
import First_Pane from './Blocks/First_Pane'
import Second_Pane from './Blocks/Second_Pane'

const Home = () => {
  return (
    <Layout>
      <Hero />
      <First_Pane />
      <Second_Pane />
    </Layout>
  
  )
}

export default Home