import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { sortContainerStyle, sortLabelStyle } from "./SortContainer";
const SortItems = () => {
  const [sort, setSort] = useState("");

  const handleChange = (event) => {
    setSort(event.target.value);
  };

  return (
    <Box sx={{ width: "111px" }}>
      <TextField
        select
        label="sort by"
        fullWidth
        margin="dense"
        size="small"
        variant="outlined"
      >
        <MenuItem value={"color"}>Color</MenuItem>
        <MenuItem value={"size"}>Size</MenuItem>
        <MenuItem value={"brand"}>Brand</MenuItem>
      </TextField>
    </Box>
  );
};
export default SortItems;
