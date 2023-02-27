import { useState } from "react";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    // onSearch(query);
  };

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <form onSubmit={handleSearch}>
      <TextField
        placeholder="Search"
        value={query}
        onChange={handleInputChange}
        sx={{margin:3}}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton type="submit">
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </form>
  );
}

export default SearchBar;
