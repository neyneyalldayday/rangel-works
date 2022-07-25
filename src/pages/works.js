import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/SEO"
import "../../src/components/layout.css"
import Shop from "../components/Shop"





const Works = () => {
  

  return(
    <Layout >
    <Seo title="works" />
    <h1 className="works">the shop</h1>
    <Shop />      
    </Layout>
  )
}
  


export default Works
