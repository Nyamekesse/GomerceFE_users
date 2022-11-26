import React from "react";
import { Grid, Box } from "@mui/material";
import Filters from "../../components/filters";
import { SideFilters } from "./SearchPageStyle";
import BreadCrumbs from "../../components/breadCrumbs";
import SearchResultsDisplay from "../../components/SearchResultsDisplay";

const SearchPage = () => {
  const navigation = [
    { label: "Home", link: "/" },
    { label: "Collection", link: "/" },
    { label: "Item Title", link: "/" },
  ];
  return (
    <>
      <BreadCrumbs navigation={navigation} />
      <Grid
        container
        direction="row"
        spacing={4}
        justifyContent="space-between"
      >
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
