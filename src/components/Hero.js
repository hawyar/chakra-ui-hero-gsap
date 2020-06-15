import React, { useRef, useEffect } from "react"
import styled from "styled-components"
import TextLoop from "react-text-loop"
import {
  Button,
  Heading,
  Box,
  Image,
  useColorMode,
  Divider,
  Text,
} from "@chakra-ui/core"

import { TweenMax, TimelineLite, Power4 } from "gsap"

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  const bg = { light: "gray.300", dark: "gray.900" }
  const text = { light: "blue.600", dark: "gray.300" }
  const smallText = { light: "blue.900", dark: "blue.400" }

  const textArr = ["Cool websites", "Fancy graphics", "Bold type"]

  let app = useRef(null)
  let title1 = useRef(null)
  let title2 = useRef(null)
  let title3 = useRef(null)
  let title4 = useRef(null)
  let image = useRef(null)
  let divider = useRef(null)
  let button = useRef(null)

  useEffect(() => {
    let tl = new TimelineLite()

    TweenMax.to(app, 0, { css: { visibility: "visible" } })

    const textOne = title1.children
    const textTwo = title2.children
    const textThree = title3.children
    const textFour = title4.children
    const dividerContent = divider.children
    const buttonContent = button.children
    const imgFirst = image

    tl.staggerFrom(
      [textOne, textTwo, textThree, textFour],
      1.5,
      {
        y: 230,
        // easing from Power4
        ease: Power4.easeInOut,
      },
      0.2
    )

      .from(imgFirst, 2, { y: 450, ease: Power4.easeInOut, opacity: 0 }, 0.2)
      .from(imgFirst.children, 2.6, { scale: 1.6, ease: Power4.easeInOut }, 0.1)
      .from(
        dividerContent,
        2,
        { x: -350, ease: Power4.easeInOut, opacity: 0 },
        0.4
      )
      .from(
        buttonContent,
        1,
        { y: 75, ease: Power4.easeInOut, opacity: 0 },
        0.4
      )
  }, [title1])

  return (
    <Box
      ref={el => (app = el)}
      minHeight="100vh"
      minWidth="100vw"
      px={["2rem", "3rem", "6rem", "10rem"]}
      paddingTop={["2rem", "2rem", "3rem", "4rem"]}
      margin="0 auto"
      display="flex"
      bg={bg[colorMode]}
    >
      <Box width={["100%"]}>
        <ImgWrapper ref={el => (image = el)}>
          <Image
            width="130px"
            src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&auto=format&fit=crop&w=973&q=80"
          />
        </ImgWrapper>
        <Box>
          <TextMask ref={el => (title1 = el)}>
            <Text
              fontSize="xl"
              mt={6}
              fontWeight="normal"
              color={smallText[colorMode]}
            >
              Mika Doe- Engineer @Gatsby
            </Text>
          </TextMask>

          <Box ref={el => (divider = el)}>
            <Divider height="2px" mb={6} mt={6} />
          </Box>

          <TextMask ref={el => (title2 = el)}>
            <Heading
              fontSize={["2rem", "4rem", "6rem"]}
              fontFamily="Integral"
              color={text[colorMode]}
              lineHeight={["2.2rem", "4.2rem", "6.2rem"]}
            >
              Based in Austria,
            </Heading>
          </TextMask>

          <TextMask ref={el => (title3 = el)}>
            <Heading
              fontSize={["2rem", "4rem", "6rem"]}
              fontFamily="Integral"
              color={text[colorMode]}
              lineHeight={["2.2rem", "4.2rem", "6.2rem"]}
            >
              busy making
            </Heading>
          </TextMask>

          <TextMask ref={el => (title4 = el)}>
            <TextLoop mask={false} delay="2000" interval="3000">
              {textArr.map(el => {
                return (
                  <Heading
                    lineHeight={["2.2rem", "4.2rem", "6.2rem"]}
                    fontSize={["2rem", "4rem", "6rem"]}
                    fontFamily="Integral"
                    color={text[colorMode]}
                  >
                    {el}
                  </Heading>
                )
              })}
            </TextLoop>
          </TextMask>
          <Box display="inline-block" ref={el => (button = el)}>
            <Button
              onClick={toggleColorMode}
              mt={16}
              size="lg"
              fontSize="sm"
              rounded="md"
            >
              Toggle {colorMode === "light" ? "Dark" : "Light"}
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  /* masks image */
  overflow: hidden;
  width: 120px;
  height: 120px;
  /* box-shadow: -45px 5px 73px rgba(0, 0, 0, 0.1); */
`

// masks hero texts
const TextMask = styled.div`
  height: auto;
  width: auto;
  overflow: hidden;
`

export default Header
