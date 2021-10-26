import { Button } from "@chakra-ui/button";
import {
  FormControl,
  FormHelperText,
  FormLabel,
} from "@chakra-ui/form-control";
import { CopyIcon, DownloadIcon } from "@chakra-ui/icons";
import { Input } from "@chakra-ui/input";
import { Box, Divider, Flex, Heading, Stack } from "@chakra-ui/layout";
import { Textarea } from "@chakra-ui/textarea";
import MarkdownPreview from "@uiw/react-markdown-preview";
import React, { useState } from "react";
import { GrPowerReset } from "react-icons/gr";

import { useAppToast } from "components/ui/AppToast";
import MainWrap from "components/wrapper/MainWrap";
import { dummyInput } from "constants/dummyInput";
import { useDesktopWidthCheck } from "functions/helpers/desktopWidthChecker";

function App() {
  const isDesktopWidth = useDesktopWidthCheck();
  const toast = useAppToast();
  const [value, setValue] = useState<string>(dummyInput);
  const [fileName, setFileName] = useState<string>("README.md");

  const changeTextInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    return setValue(event.target.value);
  };

  const changeFileName = (e: React.ChangeEvent<HTMLInputElement>) => {
    return setFileName(e.target.value ? e.target.value : "README.md");
  };

  const clearInputField = () => setValue("");

  const copyToClipboard = () => {
    toast({
      status: "success",
      title: "Text copied successfully!",
    });
    return navigator.clipboard.writeText(value);
  };

  const downloadMD = (customName?: string) => {
    const textToSave = value;
    const hiddenElement = document.createElement("a");

    hiddenElement.href = "data:attachment/text," + encodeURI(textToSave);
    hiddenElement.target = "_blank";
    hiddenElement.download = customName ? customName : "README.md";
    hiddenElement.click();
  };

  return (
    <MainWrap>
      <Heading as="h2" textAlign="center">
        📝Live Markdown Editor📝
      </Heading>
      <Divider />
      <Flex
        gridGap={2}
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
            maxW="46rem"
            border="1px"
            borderColor="gray"
            focusBorderColor="blue.500"
            variant="outline"
            value={value}
          />
          <Stack alignItems="end" spacing={2}>
            <FormControl>
              <FormLabel>Custom Filename (and format): </FormLabel>
              <Input
                maxW="46rem"
                onChange={changeFileName}
                variant="filled"
                placeholder="Ex: README.md"
                borderColor="black"
                borderWidth="1px"
              />
              <FormHelperText>Default filename: README.md</FormHelperText>
            </FormControl>
            <Flex gridGap={2}>
              <Button
                colorScheme="telegram"
                leftIcon={<DownloadIcon />}
                onClick={() => downloadMD(fileName)}
              >
                Download
              </Button>
              <Button
                colorScheme="teal"
                onClick={() => copyToClipboard()}
                leftIcon={<CopyIcon />}
              >
                Copy to Clipboard
              </Button>
              <Button
                colorScheme="yellow"
                onClick={() => clearInputField()}
                leftIcon={<GrPowerReset />}
              >
                Clear Input Field
              </Button>
            </Flex>
          </Stack>
        </Stack>
        <Stack w="100%" spacing={4}>
          <Heading as="h4" size="lg">
            Preview
          </Heading>
          <Box
            maxW="46rem"
            border="1px"
            borderColor="gray"
            rounded="md"
            overflowY="scroll"
            h="30rem"
            overflowX="auto"
            pl={1}
          >
            <MarkdownPreview source={value} />
          </Box>
        </Stack>
      </Flex>
    </MainWrap>
  );
}

export default App;
