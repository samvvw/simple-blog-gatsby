/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it

import { createGlobalStyle, ThemeProvider } from "styled-components"
import Theme from "./src/themes/theme"
import React from "react"

const GlobalSyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    ${"" /* border: red solid 1px !important; */}
  }
  body,
  html {
    font-family: ${props => props.theme.fonts.main};
    height: 100%;
    background-color: ${props => props.theme.colors.light1};
  }
`

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={Theme}>
    <GlobalSyles />
    {element}
  </ThemeProvider>
)
