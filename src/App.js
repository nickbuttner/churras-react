import React from "react";
import { ThemeProvider } from "styled-components";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import GlobalStyles from "./shared-styles/global.styles";
import theme from "./shared-styles/theme";
import Routes from "./routes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AlertProvider
        template={AlertTemplate}
        position="bottom center"
        timeout={5000}
      >
        <Routes />
      </AlertProvider>
    </ThemeProvider>
  );
}

export default App;
