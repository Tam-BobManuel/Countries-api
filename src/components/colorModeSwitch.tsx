import { HStack, IconButton, Text, useColorMode } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

function ColorModeSwitch() {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <IconButton
        icon={colorMode === "dark" ? <FaSun /> : <FaMoon />}
        aria-label={
          colorMode === "dark" ? "Switch to light mode" : "Switch to dark mode"
        }
        onClick={toggleColorMode}
        colorScheme="white"
        variant="ghost"
      />
      <Text as="b" whiteSpace="nowrap">
        {colorMode === "dark" ? "Light Mode" : "Dark Mode"}
      </Text>
    </HStack>
  );
}

export default ColorModeSwitch;
