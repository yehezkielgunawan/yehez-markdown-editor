import { useToast, UseToastOptions } from "@chakra-ui/react";

export const useAppToast = (options?: UseToastOptions) =>
  useToast({
    variant: "solid",
    position: "bottom-right",
    isClosable: true,
    ...options,
  });
