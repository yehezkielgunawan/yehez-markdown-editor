import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import ContainerWrapper from "./components/wrapper/ContainerWrapper";
import theme from "./theme";

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <ContainerWrapper>
        <App />
      </ContainerWrapper>
    </React.StrictMode>
  </ChakraProvider>,
  document.getElementById("root")
);
