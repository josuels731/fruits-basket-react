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
        
        font-family: 'Lato', sans-serif;
            
        background-color: #003049;
        color: #FFFFFF;

        -webkit-font-smoothing: antialiased;
        -webkit-tap-highlight-color: transparent;
        -moz-osx-font-smoothing: grayscale;
    }

    textarea {
        font-family: 'Lato', sans-serif;
    }
    
    button {
        font-family: 'Lato', sans-serif;
    }

    input {
        font-family: 'Lato', sans-serif;
    }

    svg {
        width: 100%;
        height: 100%;
    }

    #root {
        width: 100vw;
        height: 100vh;
    }
`

export default GlobalStyle