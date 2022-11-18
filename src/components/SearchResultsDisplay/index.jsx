import React from "react";
import { ResultContainer, Title, Label } from "./SearchResultsDisplay";
import SortItems from "../SortContainer";
import Grid from "@mui/material/Grid";
import ProductCard from "../ProductCard";
import { useSelector } from "react-redux";
import AppPagination from "../Pagination";
import { useLocation } from "react-router-dom";

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
      <Title>
        <Label>Displaying 8 out 100 results</Label>
        <SortItems />
      </Title>
      <Grid container spacing={2} mt={2} mb={5}>
        {results.map((result) => (
          <Grid item key={result.id}>
            <ProductCard {...result} />
          </Grid>
        ))}
      </Grid>
      <AppPagination count={10} page={page} mt={3} />
    </ResultContainer>
  );
};

export default SearchResultsDisplay;
