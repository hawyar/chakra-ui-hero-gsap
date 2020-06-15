import { createGlobalStyle } from "styled-components"

import InterB from "../fonts/Inter-Medium.woff2"
import InterM from "../fonts/Inter-Medium.woff2"
import InterL from "../fonts/Inter-Light.woff2"
import IntegralB from "../fonts/Integral-Bold.woff2"

export default createGlobalStyle`

@font-face {
        font-family: 'Inter';
        src: local('Inter'),
        url(${InterB}) format('woff2'),
        url(${InterM}) format('woff2'),
        url(${InterL}) format('woff2'),
    }  
    @font-face {
        font-family: 'Integral';
        src: local('Integral'),
        url(${IntegralB}) format('woff2')
    }  
    
`
