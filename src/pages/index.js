import React from "react"

import {
  Nav,
  Container,
  SEO,
  FeatureImage,
  Content,
  Footer,
} from "../components"

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
