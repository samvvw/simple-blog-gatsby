import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import { NavWrapper } from "../elements/"

const Nav = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.svg" }) {
        publicURL
      }
    }
  `)

  return (
    <NavWrapper>
      <Link to="/">
        <img src={data.logo.publicURL} alt="MyLogo" />
      </Link>
    </NavWrapper>
  )
}

export default Nav
