import React from "react";
import AppPagination from "../../components/Pagination";
import {
  Typography,
  Breadcrumbs,
  Link,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { useLocation } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import { BreadcrumbsContainer } from "./orderHistoryStyle";
import {
  breadCrumbsButtonStyles,
  breadCrumbsText,
  singleBreadCrumbTextStyle,
} from "../../components/breadCrumbs/BreadCrumbs";

function createData(ID, Customer, Email, Items, Price, Status, Date) {
  return { ID, Customer, Email, Items, Price, Status, Date };
}

const rows = [
  createData(1, "John Doe", "johndoe@gmail.com", 6, 24, 4.0, 9),
  createData(1, "John Doe", "johndoe@gmail.com", 9, 37, 4.3, 54, 54),
  createData(1, "John Doe", "johndoe@gmail.com", 16.0, 24, 6.0, 9),
  createData(1, "John Doe", "johndoe@gmail.com", 3.7, 67, 4.3, 9),
  createData(1, "John Doe", "johndoe@gmail.com", 16.0, 49, 3.9, 9),
];

const OrdersHistory = () => {
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  const query = useQuery();
  const page = query.get("page") || 1;
  return (
    <>
      <BreadcrumbsContainer mt={3}>
        <Typography variant="h6" component="p">
          Orders history
        </Typography>
        <Breadcrumbs
          arial-label="breadcrumb"
          separator={<NavigateNextIcon fontSize="small" />}
        >
          <Button sx={breadCrumbsButtonStyles}>
            <Link underline="hover" href="#" sx={breadCrumbsText}>
              Home
            </Link>
          </Button>
          <Typography sx={singleBreadCrumbTextStyle}>History</Typography>
        </Breadcrumbs>
      </BreadcrumbsContainer>

      <TableContainer
        component={Paper}
        style={{ marginTop: "25px", marginBottom: "25px" }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Customer</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Items</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.ID}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.ID}
                </TableCell>
                <TableCell align="right">{row.Customer}</TableCell>
                <TableCell align="right">{row.Email}</TableCell>
                <TableCell align="right">{row.Items}</TableCell>
                <TableCell align="right">{row.Price}</TableCell>
                <TableCell align="right">{row.Status}</TableCell>
                <TableCell align="right">{row.Date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <AppPagination count={10} page={page} />
      </TableContainer>
    </>
  );
};

export default OrdersHistory;
