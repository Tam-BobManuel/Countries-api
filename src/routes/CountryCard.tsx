import { useState, useEffect } from "react";
import data from "../hooks/data.json";
import {
  Box,
  Image,
  Text,
  SimpleGrid,
  Skeleton,
  Select,
  Input,
  Stack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

function CountryCards() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedContinent, setSelectedContinent] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const filteredCountries = data.filter((country) => {
    if (selectedContinent !== "All" && country.region !== selectedContinent) {
      return false;
    }
    if (!searchQuery) {
      return true;
    }
    return country.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <Box w={"100%"}>
      <Stack
        direction={{ base: "column", md: "row" }} // Stack vertically on small screens, horizontally on larger screens
        justifyContent="space-between"
        padding={5}
      >
        <Input
          placeholder="Search country..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          mb={{ base: "4", md: "0" }}
          width={{ base: "100%", md: "40%" }}
        />
        <Select
          value={selectedContinent}
          onChange={(e) => setSelectedContinent(e.target.value)}
          mb={{ base: "4", md: "0" }}
          width={{ base: "50%", md: "30%" }}
        >
          <option value="All">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </Select>
      </Stack>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        spacing={5}
      >
        {isLoading
          ? Array.from({ length: 8 }).map((_, index) => (
              <Box
                key={index}
                borderRadius="lg"
                overflow="hidden"
                boxShadow="2xl"
              >
                <Skeleton height="200px" />
                <Box p="4">
                  <Skeleton height="20px" mb="2" />
                  <Skeleton height="20px" mb="2" />
                  <Skeleton height="20px" mb="2" />
                </Box>
              </Box>
            ))
          : filteredCountries.map((country) => (
              <Link
                key={country.alpha3Code}
                to={`Country/${country.alpha3Code}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Box
                  borderRadius="lg"
                  overflow="hidden"
                  boxShadow="2xl"
                  height="100%"
                >
                  <Box height="200px" width="100%" overflow="hidden">
                    <Image
                      src={country.flags.svg}
                      alt={country.name}
                      height="100%"
                      width="100%"
                      objectFit="fill"
                    />
                  </Box>
                  <Box p="4">
                    <Text fontWeight="bold" fontSize="xl" mb="2">
                      {country.name}
                    </Text>
                    <Text>
                      <Text as="b">Population: </Text>
                      {country.population.toLocaleString()}{" "}
                    </Text>
                    <Text>
                      <Text as="b">Region: </Text> {country.region}
                    </Text>
                    <Text>
                      <Text as="b">Capital: </Text>
                      {country.capital}
                    </Text>
                  </Box>
                </Box>
              </Link>
            ))}
      </SimpleGrid>
    </Box>
  );
}

export default CountryCards;
