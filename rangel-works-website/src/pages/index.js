import * as React from "react"
import HeroSection from "../components/HeroSection"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/SEO"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />  
    <HeroSection />      
  </Layout>
)

export default IndexPage
