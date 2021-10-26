import { Box, Flex, Text } from "@chakra-ui/layout";
import { Button, Icon } from "@chakra-ui/react";
import { CgNotes } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";

const HeaderComponent = () => {
  return (
    <Box
      justifyContent="start"
      width="100%"
      opacity="0.95"
      top={0}
      transition="0.3s ease-out"
    >
      <Flex justifyContent="space-between" py={2} align="center" mx={2}>
        <Text as="a" href="/" fontSize="lg">
          <Icon as={CgNotes} /> <b>yehez-markdown-editor</b>
        </Text>

        <Button
          leftIcon={<FaGithub />}
          variant="ghost"
          size="md"
          as="a"
          target="_blank"
          href="https://github.com/yehezkielgunawan/yehez-markdown-editor"
        >
          Open in Github
        </Button>
      </Flex>
    </Box>
  );
};

export default HeaderComponent;
