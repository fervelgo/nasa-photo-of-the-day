import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider} from 'styled-components';
import { render } from 'react-dom';

import themeObj from ',/Theme';

render(
    <ThemeProvider theme = {themeObj}>
      <App />
    </ThemeProvider>,
    document.querySelector('#root')
  )
  
