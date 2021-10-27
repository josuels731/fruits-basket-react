import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    :root {
        user-select: none;
        margin: 0;
    }

    body {
        height: 100vh;
        width: 100vw;
        margin: 0;

        box-sizing: border-box;
        overflow: hidden;
        
        font-family: Maven Pro;
        font-weight: 500;
            
        background-color: #06093E;
        color: #FFFFFF;

        -webkit-font-smoothing: antialiased;
        -webkit-tap-highlight-color: transparent;
        -moz-osx-font-smoothing: grayscale;
    }

    #root {
        width: 100vw;
        height: 100vh;
    }
`

export default GlobalStyle