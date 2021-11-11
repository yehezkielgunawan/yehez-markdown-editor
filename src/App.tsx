import { Button } from "@chakra-ui/button";
import {
  FormControl,
  FormHelperText,
  FormLabel,
} from "@chakra-ui/form-control";
import { CopyIcon, DownloadIcon } from "@chakra-ui/icons";
import { Input } from "@chakra-ui/input";
import { Divider, Flex, Heading, Stack, Text } from "@chakra-ui/layout";
import { Box, Link } from "@chakra-ui/react";
import MarkdownPreview from "@uiw/react-markdown-preview";
import CodeEditor from "@uiw/react-textarea-code-editor";
import React, { useState } from "react";
import { GrPowerReset, GrTemplate } from "react-icons/gr";

import { useAppToast } from "components/ui/AppToast";
import MainWrap from "components/wrapper/MainWrap";
import { templateInput } from "constants/dummyInput";
import { useDesktopWidthCheck } from "functions/helpers/desktopWidthChecker";

function App() {
  const isDesktopWidth = useDesktopWidthCheck();
  const toast = useAppToast();
  const [value, setValue] = useState<string>("");
  const [fileName, setFileName] = useState<string>("README.md");

  const changeTextInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    return setValue(event.target.value);
  };

  const changeFileName = (e: React.ChangeEvent<HTMLInputElement>) => {
    return setFileName(e.target.value ? e.target.value : "README.md");
  };

  const clearInputField = () => setValue("");

  const useTemplateInput = () => setValue(templateInput);

  const copyToClipboard = () => {
    toast({
      status: "success",
      title: "Text copied successfully!",
    });
    return navigator.clipboard.writeText(value);
  };

  const downloadMD = (customName?: string) => {
    const hiddenElement = document.createElement("a");

    hiddenElement.href = "data:attachment/text," + encodeURIComponent(value);
    hiddenElement.target = "_blank";
    hiddenElement.download = customName ? customName : "README.md";
    hiddenElement.click();
  };

  return (
    <MainWrap>
      <Heading as="h1" textAlign="center" fontSize={["md", "2xl"]}>
        📝Live Markdown Editor📝
      </Heading>
      <Divider />
      <Flex
        gridGap={2}
        justify="space-between"
        wrap={isDesktopWidth ? "nowrap" : "wrap"}
      >
        <Stack w="100%" spacing={4}>
          <Text fontSize={["sm", "lg"]}>
            <b>Input the text here</b>
          </Text>

          <Box
            maxW="45rem"
            h="30rem"
            overflowY="scroll"
            borderWidth="1px"
            borderRadius="md"
            bg="gray.200"
            borderColor="gray"
          >
            <CodeEditor
              value={value}
              language="markdown"
              placeholder="Enter the markdown text here."
              onChange={changeTextInput}
              padding={12}
              style={{
                fontSize: 14,
                fontFamily: "catamaran",
              }}
            />
          </Box>
          <Stack alignItems="start" spacing={2}>
            <FormControl>
              <FormLabel>Custom Filename (and format):</FormLabel>
              <Input
                maxW="46rem"
                onChange={changeFileName}
                variant="filled"
                placeholder="Ex: README.md"
                borderColor="black"
                borderWidth="1px"
              />
              <FormHelperText>
                Default filename: README.md (Check{" "}
                <Link
                  isExternal
                  href="https://www.markdownguide.org/cheat-sheet"
                >
                  <b>
                    <u>this link</u>
                  </b>
                </Link>
                , if you need a markdown cheatsheet)
              </FormHelperText>
            </FormControl>
            <Flex gridGap={2} wrap="wrap">
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
              <Button
                colorScheme="orange"
                onClick={() => useTemplateInput()}
                leftIcon={<GrTemplate />}
              >
                README Template
              </Button>
            </Flex>
          </Stack>
        </Stack>
        <Stack w="100%" spacing={4}>
          <Text fontSize={["sm", "lg"]}>
            <b>Preview</b>
          </Text>

          <Box
            maxW="46rem"
            h="30rem"
            bg="gray.200"
            borderWidth="1px"
            borderRadius="md"
            borderColor="gray"
            overflowY="scroll"
            p={2}
          >
            <MarkdownPreview
              source={value}
              style={{
                fontSize: 12,
                fontFamily:
                  "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
              }}
            />
          </Box>
        </Stack>
      </Flex>
    </MainWrap>
  );
}

export default App;
