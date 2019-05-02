import React from "react"
import { Link } from "gatsby"

import Layout from "../layout"
import SEO from "../components/seo"

import About from "../components/About"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <About></About>
    <button>Normal</button>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
