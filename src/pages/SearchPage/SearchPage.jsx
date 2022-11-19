import React from "react";
import { Grid, Box } from "@mui/material";
import Filters from "../../components/Filters";
import { SideFilters } from "./SearchPageStyle";
import BreadCrumbs from "../../components/breadCrumbs";
import SearchResultsDisplay from "../../components/SearchResultsDisplay";

const SearchPage = () => {
  return (
    <>
      <BreadCrumbs />
      <Grid container direction="row" spacing={1}>
        <Grid item xs={3}>
          <Box sx={SideFilters}>
            <Filters />
            <Filters />
            <Filters />
          </Box>
        </Grid>
        <Grid item xs={9}>
          <SearchResultsDisplay />
        </Grid>
      </Grid>
    </>
  );
};

export default SearchPage;
