import React from "react"

import {
  Nav,
  Container,
  FeatureImage,
  Content,
  Footer,
  ContentCard,
  SEO,
} from "../components"

const IndexPage = ({ children }) => (
  <Container>
    <SEO title="Home" />
    <Nav />
    <FeatureImage />
    <Content>
      <ContentCard
        date="March 22, 2020"
        title="Article Title"
        excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac sem eget lacus fringilla congue id quis dui. Morbi at nibh vestibulum, laoreet erat a, egestas ex. Vestibulum mollis nisl nec aliquam tempor. Nunc laoreet risus eget pharetra lobortis. Vivamus quis euismod nibh, vitae rhoncus odio. Nam in fermentum arcu, eu egestas purus. Proin sodales tortor ut suscipit pharetra. Pellentesque fringilla tortor magna, vel fermentum dui dignissim in. Integer fringilla convallis dolor. "
        slug="1"
      >
        {children}
      </ContentCard>
    </Content>
    <Footer />
  </Container>
)

export default IndexPage
