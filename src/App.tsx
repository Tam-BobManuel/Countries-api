import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import CountryCard from "./routes/CountryCard";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./error-page";
import Detail from "./routes/Detail";
import Footer from "./components/Footer";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <CountryCard />,
    errorElement: <ErrorPage />,
  },
  {
    path: "Country/:countryId",
    element: <Detail />,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" 
                  "main"
                  "footer"`,
          lg: `"nav nav" 
                "main main"
                "footer footer"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem pl="2" area="nav" padding={0}>
          <NavBar />
        </GridItem>
        <GridItem pl="2" area="main">
          <RouterProvider router={router} />
        </GridItem>
      </Grid>
      <GridItem pl="2" area="footer">
        <Footer />
      </GridItem>
    </>
  );
}

export default App;
