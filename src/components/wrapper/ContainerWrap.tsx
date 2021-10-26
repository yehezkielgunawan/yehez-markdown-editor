import { Flex, useColorMode } from "@chakra-ui/react";
import { ReactNode } from "react";

import FooterComponent from "../layouts/FooterComponent";
import HeaderComponent from "../layouts/HeaderComponent";

type ContainerProps = {
  children: ReactNode;
};

const ContainerWrapper = ({ children }: ContainerProps) => {
  const { colorMode } = useColorMode();

  const color = { light: "black", dark: "white" };
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="flex-start"
      color={color[colorMode]}
    >
      <HeaderComponent />
      {children}
      <FooterComponent />
    </Flex>
  );
};

export default ContainerWrapper;
