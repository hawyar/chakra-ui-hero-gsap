# Hero Animation in Gatsby
> A showcase using Chakra-UI + GSAP


[Live demo](https://happy-bardeen-e4a6ad.netlify.app/) 

Check it out on [Codesandbox](https://codesandbox.io/s/github/hawyar/chakra-ui-hero-gsap?file=/src/pages/index.js)


![Hero Section in dark mode](https://i.ibb.co/rMpQjKR/screencapture-localhost-8000-2020-06-15-03-18-37.png)

I often have to use GSAP for some animations so I made this Gatsby + Chakra-UI + GSAP sort of starter for my own projects (not a Gatsby starter).




## Clone

```sh
git clone https://github.com/hawyar/chakra-ui-hero-gsap.git

```


## Edit
To change the colors, texts, and image head over to `src/components/Hero.js`

Animted Looping Text

```js 
// each element represents one line
const textArr = ["Cool websites", "Fancy graphics", "Bold type"]
```


Small header

```js

 <Text
    fontSize="xl"
    mt={6}
    fontWeight="normal"
    color={smallText[colorMode]}
    >
    Hawyar Farooq - Engineer @Home
</Text>
```

The rest of the texts are similar to the Heading below

```js
 <Heading
  fontSize={["2rem", "4rem", "6rem"]}
  fontFamily="Integral"
  color={text[colorMode]}
  lineHeight={["2.2rem", "4.2rem", "6.2rem"]}
  >
  Based in FT Wayne,
 </Heading>
```




## Dependencies
 - [Chakra-UI](https://chakra-ui.com/)
 - [GSAP](https://greensock.com/docs/v3/Installation#npm)
 - [Styled-Component](https://styled-components.com/docs/basics#installation)
  






## Contributing

1. Fork it (<https://github.com/yourname/yourproject/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

---
[@HawyarFarooq](https://twitter.com/HawyarFarooq)  - hawyarxoshnaw@gmail.com