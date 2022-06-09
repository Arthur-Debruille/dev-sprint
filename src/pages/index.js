import * as React from "react"
import '../styles/components/utils/root.scss';

import Footer from '../components/Footer.jsx'
import Header from '../components/Header.jsx'
import Hero from "../components/section/Hero";
import Products from "../components/section/Products.jsx"
import Informations from "../components/section/Informations";
import Discover from "../components/section/Discover";
import Event from "../components/section/Event";

// markup
const IndexPage = () => {
  return (
    <>
    <Header/>
    <main>
      <Hero/>
      <Products/>
      <Informations/>
      <Discover/>
      <Event/>
    </main>
    <Footer/>
    </>
  )
}

export default IndexPage
