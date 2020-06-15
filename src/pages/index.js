import React from "react"
import Hero from "../components/Hero"
import GlobalStyle from "../components/styles/GlobalStyle"
import {
  ThemeProvider,
  theme,
  CSSReset,
  ColorModeProvider,
} from "@chakra-ui/core"

const IndexPage = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CSSReset />
        <GlobalStyle />
        <ColorModeProvider>
          <Hero />
        </ColorModeProvider>
      </ThemeProvider>
    </div>
  )
}
export default IndexPage
