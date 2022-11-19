import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { sortContainerStyle, sortLabelStyle } from "./SortContainer";
const SortItems = () => {
  const [sort, setSort] = useState("");

  const handleChange = (event) => {
    setSort(event.target.value);
  };

  return (
    <Box>
      <FormControl fullWidth size="small">
        <InputLabel sx={sortLabelStyle} id="sort-items-label">
          Sort By
        </InputLabel>
        <Select
          sx={sortContainerStyle}
          id="demo-simple-select"
          labelId="sort-items-label"
          value={sort}
          label="Sort By"
          onChange={handleChange}
        >
          <MenuItem value={"size"}>Size</MenuItem>
          <MenuItem value={"color"}>Color</MenuItem>
          <MenuItem value={"price"}>Price</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
export default SortItems;
