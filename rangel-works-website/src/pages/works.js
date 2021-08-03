import * as React from "react"
import {graphql, useStaticQuery} from 'gatsby'
import get from 'lodash/get'
import ProductList from '../components/ProductList'
import Layout from "../components/layout"
import SEO from "../components/SEO"
import "../../src/components/layout.css"
import Shop from "../components/Shop"
import { useStaticQuery } from "gatsby"

const Works = ({location}) => {
  const data = useStaticQuery(graphql`
   query IndexQuery {
      site {
        siteMetadata {
          title
        }
      }
      allMoltinProduct {
        edges {
          node {
            id
            name
            description
            mainImageHref
            meta {
              display_price {
                with_tax {
                  amount
                  currency
                  formatted
                }
              }
            }
            mainImage {
              childImageSharp {
                sizes(maxWidth: 600) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  `)
  const siteTitle = get(data, 'site.siteMetadata.title')
  const products = get(data, 'allMoltinProduct.edges')
  const filterProductsWithoutImages = products.filter(v => v.node.mainImageHref)

  return(
    <Layout location={location}>
    <SEO title={siteTitle} />
   <Shop  />
   <ProductList products={filterProductsWithoutImages} />
  </Layout>
  )
}
  


export default Works
