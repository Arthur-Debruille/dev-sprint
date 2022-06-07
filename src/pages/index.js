import * as React from "react"
import '../styles/components/utils/root.scss';

import Footer from '../components/Footer.jsx'
import Header from '../components/Header.jsx'
import Hero from "../components/section/Hero";
import Products from "../components/section/Products.jsx"
import Informations from "../components/section/Informations";

// markup
const IndexPage = () => {
  return (
    <>
    <Header/>
    <main>
      <Hero/>
      <Products/>
      <Informations/>
    </main>
    <Footer/>
    </>
  )
}

export default IndexPage
