import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../../src/components/layout.css"
import Shop from "../components/Shop"

const Works = ({location}) => (
  <Layout>
    <SEO title="Works" />
   <Shop location={location} />
  </Layout>
)

export default Works
