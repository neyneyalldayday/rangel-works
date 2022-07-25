import React from 'react'
import ContactUs from '../components/ContactUs'
import Layout from "../components/layout"
import Seo from "../components/SEO"
import "../../src/components/layout.css"


const Email = () => {
    return (
        
            <Layout>
            <Seo title="email" />
            <ContactUs />
            </Layout>
        
    )
}

export default Email
