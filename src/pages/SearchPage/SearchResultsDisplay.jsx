import React from "react";
import { ResultContainer, Title, Label } from "./styles";
import CustomSelect from "../../components/CustomSelect";
import Grid from "@mui/material/Grid";
import ProductCard from "../../components/ProductCard";
import AppPagination from "../../components/Pagination";

const options = ["color", "size", "brand"];
const SearchResultsDisplay = () => {
  // const page = query.get("page") || 1;

  return (
    <ResultContainer>
      <Title>
        <Label>Displaying 8 out 100 results</Label>
        <CustomSelect
          showBackground={true}
          showBorder={false}
          width={"111px"}
          label="sort by"
          items={options}
        />
      </Title>
      <Grid
        container
        spacing={5}
        mt={2}
        mb={5}
        justifyContent="space-evenly"
        alignItems={"center"}
      >
        {[...Array(6)].map((_, index) => (
          // <Grid item key={index} sx={{ alignItems: "center" }}>
          <ProductCard />
          // </Grid>
        ))}
      </Grid>
      <AppPagination count={10} page={1} mt={3} />
    </ResultContainer>
  );
};

export default SearchResultsDisplay;
