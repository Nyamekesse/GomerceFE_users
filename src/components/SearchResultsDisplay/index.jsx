import React from "react";
import ResultContainer from "./SearchResultsDisplay";
import Grid from "@mui/material/Grid";
import ProductCard from "../ProductCard";
import { useSelector } from "react-redux";
import AppPagination from "../Pagination";
import { useNavigate, useLocation } from "react-router-dom";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const SearchResultsDisplay = () => {
  const results = useSelector((state) => state.productReducer);
  const query = useQuery();
  const page = query.get("page") || 1;
  const search = query.get("searchQuery");
  return (
    <ResultContainer>
      <Grid container spacing={2}>
        {results.map((result) => (
          <Grid item key={result.id}>
            <ProductCard {...result} />
          </Grid>
        ))}
      </Grid>
      <AppPagination count={10} page={page} />
    </ResultContainer>
  );
};

export default SearchResultsDisplay;
