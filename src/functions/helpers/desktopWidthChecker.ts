import { useMediaQuery } from "@chakra-ui/react";

export const useDesktopWidthCheck = () => {
  const [isDesktopWidth] = useMediaQuery("(min-width: 54rem)");

  return isDesktopWidth;
};
