import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Center, Heading, Image, Stack, Text } from "@chakra-ui/react";
import data from "../hooks/data.json";
import Buttons from "../hooks/buttons";
import { IoArrowBack } from "react-icons/io5";

interface Country {
  alpha3Code: string;
  flag: string;
  name: string;
  nativeName: string;
  population: number;
  region: string;
  subregion: string;
  capital: string;
  topLevelDomain: string;
  currencies: { name: string }[];
  languages: { name: string }[];
  borders: string[] | undefined; // Make borders optional
}

const Detail = () => {
  const [country, setCountry] = useState<Country | null>(null);
  const [, setBorderCountries] = useState<string[]>([]);
  const { countryId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const selectedCountry = data.find((c) => c.alpha3Code === countryId) as
      | Country
      | undefined;

    if (!selectedCountry) {
      navigate("/error");
    } else {
      setCountry(selectedCountry);
      if (selectedCountry.borders) {
        // Check if borders exist
        const fullBorderCountryNames = selectedCountry.borders.map((border) => {
          const borderCountry = data.find((c) => c.alpha3Code === border);
          return borderCountry ? borderCountry.name : border;
        });
        setBorderCountries(fullBorderCountryNames);
      }
    }
  }, [countryId, navigate]);

  if (!country) {
    return null;
  }

  return (
    <div>
      <Box marginLeft={"6%"} marginTop={"2%"} marginBottom={"0%"}>
        <Buttons
          to={`/`}
          value={
            <>
              <IoArrowBack /> back
            </>
          }
        />
      </Box>
      <Center>
        <Stack direction={["column", "row"]} spacing="1" padding="5%">
          <Box w="100%" padding={4}>
            <Image src={country.flag} />
          </Box>
          <Box w="100%" px={4} margin="2%">
            <Heading as="h2">{country.name}</Heading>
            <Stack direction={["column", "row"]} spacing="25%">
              <Box marginRight={10} justifyContent="space-between">
                <Text>
                  <Text as="b">Native name:</Text>{" "}
                  {country.nativeName || "Not available"}
                </Text>
                <Text>
                  <Text as="b">Population:</Text>{" "}
                  {country.population || "Not available"}
                </Text>
                <Text>
                  <Text as="b">Region: </Text>{" "}
                  {country.region || "Not available"}
                </Text>
                <Text>
                  <Text as="b">Sub Region:</Text>{" "}
                  {country.subregion || "Not available"}
                </Text>
                <Text>
                  <Text as="b">Capital:</Text>{" "}
                  {country.capital || "Not available"}
                </Text>
              </Box>
              <Box>
                <Text>
                  <Text as="b">Top Level Domain:</Text>{" "}
                  {country.topLevelDomain || "Not available"}
                </Text>
                <Text>
                  <Text as="b">Currency:</Text>{" "}
                  {country.currencies && country.currencies.length > 0
                    ? country.currencies[0].name
                    : "Not available"}
                </Text>
                <Text>
                  <Text as="b">Languages:</Text>{" "}
                  {country.languages.map((lang) => lang.name).join(", ") ||
                    "Not available"}
                </Text>
              </Box>
            </Stack>
            {country.borders && (
              <Stack direction={["column", "row"]} spacing="2px" marginTop="5%">
                <Box marginTop="5%">
                  <Text as="b" display="inline-block" marginRight="5px">
                    Border Countries:
                  </Text>{" "}
                  {country.borders?.map((border) => {
                    const borderCountry = data.find(
                      (c) => c.alpha3Code === border
                    );
                    const toValue = borderCountry
                      ? `/Country/${borderCountry.alpha3Code}`
                      : "#";
                    return (
                      <Buttons
                        value={borderCountry?.name || border}
                        key={border}
                        to={toValue}
                      />
                    );
                  })}
                </Box>
              </Stack>
            )}
          </Box>
        </Stack>
      </Center>
    </div>
  );
};

export default Detail;
