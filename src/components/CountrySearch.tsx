// CountrySearch.tsx
import React, { useState } from "react";

interface Country {
  alpha3Code: string;
  name: string;
}

interface Props {
  countries: Country[];
}

function CountrySearch({ countries }: Props) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = countries.filter((country) =>
      country.name.toLowerCase().includes(query)
    );
    setFilteredCountries(filtered);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a country..."
        value={searchQuery}
        onChange={handleSearch}
      />
      {filteredCountries.length === 0 && searchQuery && (
        <p>No matching countries found.</p>
      )}
      <ul>
        {filteredCountries.map((country) => (
          <li key={country.alpha3Code}>{country.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default CountrySearch;
