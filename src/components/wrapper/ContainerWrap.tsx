import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

import FooterComponent from "../layouts/FooterComponent";
import HeaderComponent from "../layouts/HeaderComponent";

type ContainerProps = {
  children: ReactNode;
};

const ContainerWrapper = ({ children }: ContainerProps) => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="flex-start"
      bg="gray.100"
    >
      <HeaderComponent />
      {children}
      <FooterComponent />
    </Flex>
  );
};

export default ContainerWrapper;
