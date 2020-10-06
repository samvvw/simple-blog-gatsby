import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  FooterWrapper,
  FooterSocialWrapper,
  FooterSocialIcons,
  P,
} from "../elements/"

export const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      facebook: file(relativePath: { eq: "facebook-logo.svg" }) {
        publicURL
      }
      linkedin: file(relativePath: { eq: "linkedin-logo.svg" }) {
        publicURL
      }
      twitter: file(relativePath: { eq: "twitter-logo.svg" }) {
        publicURL
      }
      instagram: file(relativePath: { eq: "instagram-logo.svg" }) {
        publicURL
      }
    }
  `)
  return (
    <FooterWrapper>
      <FooterSocialWrapper>
        <FooterSocialIcons>
          <a
            href="httpq://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={data.facebook.publicURL} alt="facebook" />
          </a>
          <a
            href="httpq://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={data.linkedin.publicURL} alt="linkedin" />
          </a>
          <a
            href="httpq://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={data.twitter.publicURL} alt="twitter" />
          </a>
          <a
            href="httpq://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={data.instagram.publicURL} alt="instagram" />
          </a>
        </FooterSocialIcons>
        <P size="xSmall" color="dark3">
          Copiright All rights reserved
        </P>
      </FooterSocialWrapper>
    </FooterWrapper>
  )
}
