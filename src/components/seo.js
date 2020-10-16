import React from "react"
import { Helmet } from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

export const SEO = ({ description, keywords, title, image, url, author }) => {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription =
          description || data.site.siteMetadata.description
        const metaTitle = title || data.site.siteMetadata.title
        const metaAuthor = author || data.site.siteMetadata.author
        const metaUrl = url || data.site.siteMetadata.url
        const metaImage = image || data.site.siteMetadata.image
        const metaKeywords = keywords || ["gatsby blog", "gatsby MDX blog"]
        console.log(data.site.siteMetadata.title)

        return (
          <Helmet
            title={metaTitle}
            meta={[
              {
                name: `description`,
                content: metaDescription,
              },
              {
                name: "url",
                content: metaUrl,
              },
              {
                property: `og:title`,
                content: metaTitle,
              },
              {
                property: `og:description`,
                content: metaDescription,
              },
              {
                property: `og:type`,
                content: `website`,
              },
              {
                name: `twitter:card`,
                content: `summary`,
              },
              {
                name: `twitter:creator`,
                content: metaAuthor,
              },
              {
                name: `twitter:title`,
                content: title,
              },
              {
                name: `twitter:description`,
                content: metaDescription,
              },
              {
                name: "image",
                content: metaImage,
              },
            ].concat(
              metaKeywords && metaKeywords.length > 0
                ? {
                    name: "keywords",
                    content: metaKeywords.join(", "),
                  }
                : []
            )}
          />
        )
      }}
    />
  )
}

const detailsQuery = graphql`
  query DefaultSeoQuery {
    site {
      siteMetadata {
        title
        description
        author
        image
      }
    }
  }
`
