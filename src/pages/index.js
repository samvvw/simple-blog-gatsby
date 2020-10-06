import React from "react"

import { Nav, Container, FeatureImage, Content, Footer } from "../components"

import SEO from "../components/seo"

const IndexPage = ({ children }) => (
  <Container>
    <SEO title="Home" />
    <Nav />
    <FeatureImage />
    <Content>{children}</Content>
    <Footer />
  </Container>
)

export default IndexPage
