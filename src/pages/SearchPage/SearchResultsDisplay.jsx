import React from "react";
import { ResultContainer, Title, Label } from "./SearchPageStyle";
import SortItems from "../../components/SortContainer";
import Grid from "@mui/material/Grid";
import ProductCard from "../../components/ProductCard";
import { useSelector } from "react-redux";
import AppPagination from "../../components/Pagination";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const SearchResultsDisplay = () => {
  let results = useSelector((state) => state.productReducer);
  const query = useQuery();
  const page = query.get("page") || 1;
  // const search = query.get("searchQuery");
  // console.log(results);

  return (
    <ResultContainer>
      <Title>
        <Label>Displaying 8 out 100 results</Label>
        <SortItems />
      </Title>
      <Grid container spacing={5} mt={2} mb={5} justifyContent="space-between">
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
