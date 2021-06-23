import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import fonts from './assets/fonts/font';
import { Global } from "@emotion/react";
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import ScrollToTop from 'react-router-scroll-top';

const theme = extendTheme({
  fonts: {
    heading: "Poppins",
    body: "Poppins"
  },
  colors: {
    palette: {
      300: "#0F3460",
      600: "#16213E",
      900: "#1A1A2E",
      100: "#E94560",
      500: "#122B4F"
    }
  },
  styles: {
    global: {
      body: {
        bg:"palette.600"
      }
    }
  }
})

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <ScrollToTop />
        <App />
        <Global styles={fonts} />
      </ChakraProvider>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
