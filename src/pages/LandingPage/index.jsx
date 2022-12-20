import SideNav from "./SideNav";
import AsideMain from "./AsideMain";
import Grid from "@mui/material/Grid";
import React from "react";
import Wrapper from "../../components/Wrapper/Wrapper";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";



const LandingPage = () => {
  const theme = useTheme();
  const matchesLaptop = useMediaQuery(theme.breakpoints.down("laptop"));
  return (
    <Wrapper>
      <Grid container direction={{ laptop: "row" }} spacing={1}>
        {!matchesLaptop && (
          <Grid item mobile_large={3}>
            <SideNav />
          </Grid>
        )}
        {matchesLaptop ? (
          <Grid item mobile_large={12}>
            <AsideMain />
          </Grid>
        ) : (
          <Grid item mobile_large={9}>
            <AsideMain />
          </Grid>
        )}
      </Grid>
    </Wrapper>
  );
};

export default LandingPage;
