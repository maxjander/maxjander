import React from "react";
import ReactDOM from "react-dom";

import { createGlobalStyle } from "styled-components";
import App from "./App";

const GlobalStyle = createGlobalStyle`
  :root{

    --primary: #3a3b3c;
  font-size: calc(8px + 2vmin);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-transform: lowercase;
  }

  body {
    font-family: 'Roboto, sans-serif';
    font-size: calc(8px + 2vmin);
    background-color: pink;

  }

  html {
    color: var(--primary);
    line-height: calc( 1 + 2vmin);
    font-Family: 'Raleway', Sans-Serif;
  }
  a {
		text-decoration: none;
		color: var(---primary);
	}

  	ul {
		list-style-type: none;
    padding-top: 2vmin;
	}

  li{
    padding-top: 1vmin;
  }

  h1, h2, h3, h4, h5, h6 {
    Font-Family: 'Vollkorn', Serif;}
`;

ReactDOM.render(
	<React.StrictMode>
		<GlobalStyle />
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);
