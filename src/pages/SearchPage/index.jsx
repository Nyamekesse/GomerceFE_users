import React from "react";
import { Grid, Box } from "@mui/material";
import Filters from "./Filters";
import { SideFilters } from "./SearchPageStyle";
import BreadCrumbs from "../../components/BreadCrumbs";
import SearchResultsDisplay from "./SearchResultsDisplay";
import Wrapper from "../../components/Wrapper/Wrapper";
import filters from "../../SetUpData/filter";
const SearchPage = () => {
  const navigation = [
    { label: "Home", link: "/" },
    { label: "Collection", link: "/" },
    { label: "Item Title", link: "/" },
  ];
  return (
    <Wrapper>
      <BreadCrumbs navigation={navigation} />
      <Grid
        container
        direction="row"
        spacing={4}
        justifyContent="space-between"
      >
        <Grid item xs={3}>
          <Box sx={SideFilters}>
            {filters.map((element, index) => {
              return <Filters {...element} key={index} />;
            })}
          </Box>
        </Grid>
        <Grid item xs={9}>
          <SearchResultsDisplay />
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default SearchPage;
