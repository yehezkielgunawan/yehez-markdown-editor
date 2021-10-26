import { Box, Divider, Flex, Heading, Stack } from "@chakra-ui/layout";
import { Textarea } from "@chakra-ui/textarea";
import MarkdownPreview from "@uiw/react-markdown-preview";
import React, { useState } from "react";

import MainWrap from "components/wrapper/MainWrap";
import { dummyInput } from "constants/dummyInput";
import { useDesktopWidthCheck } from "functions/helpers/desktopWidthChecker";

function App() {
  const isDesktopWidth = useDesktopWidthCheck();
  const [value, setValue] = useState<string>(dummyInput);

  const changeTextInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    return setValue(event.target.value);
  };

  return (
    <MainWrap>
      <Heading as="h2" textAlign="center">
        📝Live Markdown Editor📝
      </Heading>
      <Divider />
      <Flex
        gridGap={4}
        justify="center"
        wrap={isDesktopWidth ? "nowrap" : "wrap"}
      >
        <Stack w="100%" spacing={4}>
          <Heading as="h4" size="lg">
            Input the text here{" "}
          </Heading>
          <Textarea
            onChange={changeTextInput}
            h="30rem"
            maxW="42rem"
            border="1px"
            borderColor="gray"
            value={value}
          />
        </Stack>
        <Stack w="100%" spacing={4}>
          <Heading as="h4" size="lg">
            Preview
          </Heading>
          <Box
            maxW="42rem"
            border="1px"
            borderColor="gray"
            rounded="md"
            overflowY="scroll"
            h="30rem"
            overflowX="auto"
          >
            <MarkdownPreview source={value} />
          </Box>
        </Stack>
      </Flex>
    </MainWrap>
  );
}

export default App;
