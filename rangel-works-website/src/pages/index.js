import * as React from "react"
import HeroSection from "../components/HeroSection"
import Layout from "../components/layout"
import SEO from "../components/SEO"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />  
    <HeroSection />      
  </Layout>
)

export default IndexPage
