import React from "react";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import { Link } from "react-router-dom";

const AppPagination = ({ count, page }) => {
  return (
    <Pagination
      count={count}
      page={page}
      renderItem={(item) => (
        <PaginationItem {...item} component={Link} to={`/search?page=${1}`} />
      )}
    />
  );
};

export default AppPagination;
