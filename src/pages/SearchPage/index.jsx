import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Filters from "./Filters";
import { SideFilters } from "./styles";
import BreadCrumbs from "../../components/BreadCrumbs";
import SearchResultsDisplay from "./SearchResultsDisplay";
import Wrapper from "../../components/Wrapper/Wrapper";
import filters from "../../SetUpData/filter";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
const SearchPage = () => {
  const navigation = [
    { label: "Home", link: "/" },
    { label: "Collection", link: "/" },
    { label: "Item Title", link: "/" },
  ];
  const theme = useTheme();
  const matchesTablet = useMediaQuery(theme.breakpoints.down("tablet"));
  return (
    <Wrapper>
      <BreadCrumbs navigation={navigation} />
      <Grid
        container
        direction="row"
        spacing={4}
        justifyContent="space-between"
      >
        {matchesTablet ? null : (
          <Grid item mobile_large={3}>
            <Box sx={SideFilters}>
              {filters.map((element, index) => {
                return <Filters {...element} key={index} />;
              })}
            </Box>
          </Grid>
        )}

        <Grid item mobile_small={12} tablet={9}>
          <SearchResultsDisplay />
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default SearchPage;
