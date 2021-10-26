import { Text, Link as ChakraLink, Flex } from "@chakra-ui/react";

const FooterComponent = () => (
  <Flex as="footer" py="4rem">
    <Text>
      <ChakraLink isExternal href="https://yehezgun.com">
        <b>{new Date().getFullYear()} | Yehezkiel Gunawan</b>
      </ChakraLink>
    </Text>
  </Flex>
);

export default FooterComponent;
