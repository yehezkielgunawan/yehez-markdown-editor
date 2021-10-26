import { useColorMode } from "@chakra-ui/color-mode";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { Button, Icon } from "@chakra-ui/react";
import { CgNotes } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";

import { useDesktopWidthCheck } from "../../functions/helpers/desktopWidthChecker";

import DarkModeSwitch from "./DarkModeSwitch";

const HeaderComponent = () => {
  const { colorMode } = useColorMode();
  const isDesktopWidth = useDesktopWidthCheck();
  return (
    <Box
      justifyContent="start"
      bg={colorMode === "light" ? "white" : "gray.700"}
      width="100%"
      opacity="0.95"
      position="fixed"
      top={0}
      transition="0.3s ease-out"
    >
      <Flex
        justifyContent="space-between"
        py={2}
        align="center"
        mx={4}
        px={isDesktopWidth ? 1 : 3}
      >
        <Text as="a" href="/" fontSize="lg">
          <Icon as={CgNotes} />{" "}
          <b>yehez-markdown-editor</b>
        </Text>

        <Flex gridGap={3} align="center">
          <Button
            leftIcon={<FaGithub />}
            variant="ghost"
            size="sm"
            as="a"
            target="_blank"
            href="https://github.com/yehezkielgunawan/yehez-markdown-editor"
          >
            Open in Github
          </Button>

          <DarkModeSwitch />
        </Flex>
      </Flex>
    </Box>
  );
};

export default HeaderComponent;
