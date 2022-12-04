import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SearchInput from "../SearchInput";
import Button from "@mui/material/Button";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Person3OutlinedIcon from "@mui/icons-material/Person3Outlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useNavigate } from "react-router-dom";
import { customAppBarStyle, toolBarStyles, StyledButtonGroup } from "./styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
const PrimarySearchAppBar = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const matches = useMediaQuery(theme.breakpoints.down("laptop"));
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" sx={customAppBarStyle}>
        {matches && (
          <IconButton sx={{ backgroundColor: "inherit" }}>
            <MenuIcon />
          </IconButton>
        )}

        <Toolbar sx={toolBarStyles}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            onClick={() => navigate("/")}
            sx={{
              display: "block",
              height: "23px",
              color: "#1F2839",
              fontWeight: "700",
              fontSize: "20px",
              lineHeight: "23px",
              textTransform: "uppercase",
            }}
          >
            gomerce
          </Typography>

          <SearchInput />
          <StyledButtonGroup>
            {!matches ? (
              <>
                <Button variant="outlined" startIcon={<FavoriteBorderIcon />}>
                  Wishlist
                </Button>
                <Button variant="outlined" startIcon={<Person3OutlinedIcon />}>
                  Account
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<ShoppingCartOutlinedIcon />}
                >
                  Cart
                </Button>
              </>
            ) : (
              <>
                <IconButton>
                  <Person3OutlinedIcon />
                </IconButton>
                <IconButton>
                  <ShoppingCartOutlinedIcon />
                </IconButton>
              </>
            )}
          </StyledButtonGroup>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default PrimarySearchAppBar;
