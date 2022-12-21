import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import { getProducts } from "../../actions/products";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
  customSearchIcon,
} from "./styles";

const MiniSearchInput = () => {
  const [searchWord, setSearchWord] = useState("");
  const navigate = useNavigate();

  const searchProduct = () => {
    if (searchWord.trim()) {
      navigate("/products/search");
    } else {
      navigate("/home");
    }
  };
  const handleKeyPress = (e) => {
    if (e.charCode === 13) {
      searchProduct();
    }
  };

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon sx={customSearchIcon} />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search"
        inputProps={{ "aria-label": "search" }}
        value={searchWord}
        onChange={(e) => setSearchWord(e.target.value)}
        onKeyPress={handleKeyPress}
      />
    </Search>
  );
};

export default MiniSearchInput;
