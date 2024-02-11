import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";

interface Props {
  value: React.ReactNode;
  to: string;
}

const Buttons: React.FC<Props> = ({ value, to }) => {
  return (
    <Link to={to} style={{ textDecoration: "none", color: "inherit" }}>
      <Button
        variant="outline"
        borderRadius="3px"
        padding="5px"
        margin="3px"
        boxShadow="xl"
        color="#333"
        border={"1px solid gray"}
        _hover={{ bg: "whitesmoke" }}
        bg={"whitesmoke"}
      >
        {value}
      </Button>
    </Link>
  );
};

export default Buttons;
