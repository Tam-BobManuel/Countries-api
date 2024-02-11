import { Center, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import { Link, isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  let errorMessage: string;

  if (isRouteErrorResponse(error)) {
    errorMessage = error.data.message || error.statusText;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === "string") {
    errorMessage = error;
  } else {
    console.error(error);
    errorMessage = "Unknown error";
  }

  return (
    <Grid
      templateAreas={{
        base: `"nav" 
                  "main"`,
        lg: `"nav nav" 
                "main main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem pl="2" area="main" id="error-page" margin="auto" h="100vh">
        <Center height="70vh">
          <div>
            <Heading>Oops!</Heading>
            <br></br>
            <Text as="b">Sorry, an unexpected error has occurred:</Text>
            <br></br>
            <Text as="i">{errorMessage}</Text>
            <br></br>
            <Text marginTop="5%">
              Click on{" "}
              <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                Where in the world?
              </Link>{" "}
              to go back to home.
            </Text>
          </div>
        </Center>
      </GridItem>
    </Grid>
  );
}
