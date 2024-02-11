import { HStack, Text } from "@chakra-ui/react";
import ColorModeSwitch from "./colorModeSwitch";

function NavBar() {
  return (
    <HStack justifyContent="space-between" padding={2} boxShadow="lg">
      <Text as="b" marginLeft={0} fontSize="3xl" fontWeight="bold">
        <a href="/" style={{ textDecoration: "none", color: "inherit" }}>
          where in the world?
        </a>
      </Text>
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
