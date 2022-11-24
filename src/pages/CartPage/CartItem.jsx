import {
  Box,
  Button,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React from "react";
import { CustomDivider, ListItem } from "../../components/CheckOut/Checkout";
import { textStyle } from "../../components/OrderSummary/OrderSummary";
import { ActionRow } from "./CartPageStyling";
import Phone from "../../Assets/Images/phone1.jfif";
const CartItem = () => {
  const [quantity, setQuantity] = React.useState("");

  const handleChange = (event) => {
    setQuantity(event.target.value);
  };

  return (
    <Box>
      <Grid
        container
        direction="row"
        justifyContent={"space-between"}
        alignItems={"flex-start"}
        sx={{ padding: "2%" }}
      >
        <Grid item xs={3}>
          <Box>
            <img src={Phone} alt="image phone" />
          </Box>
        </Grid>
        <Grid
          item
          xs={9}
          container
          direction="row"
          justifyContent={"space-between"}
        >
          <Grid item>
            <Box>
              <Typography variant="p" sx={textStyle} noWrap="true">
                xiamo redmi 10A, 6.53" 3GB+64GB, 13.0MP, 5000mAh
              </Typography>
              <Typography variant="p" sx={textStyle}>
                4g LTE, Dual sim - graphite grey
              </Typography>
              <ActionRow>
                <FormControl
                  sx={{ width: "86px", marginRight: "2%" }}
                  size="small"
                >
                  <InputLabel id="demo-simple-select-label">Qty:</InputLabel>
                  <Select
                    size="small"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={quantity}
                    label="Qty:"
                    defaultValue={1}
                    onChange={handleChange}
                    renderValue={(selected) => {
                      if (selected.length === 0) {
                        return 1;
                      }

                      return selected;
                    }}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                  </Select>
                </FormControl>
                <Divider orientation="vertical" variant="middle" flexItem />
                <Button sx={{ color: "#1F2839" }}>delete</Button>
                <Divider orientation="vertical" variant="middle" flexItem />
                <Button sx={{ color: "#1F2839" }}>save for later</Button>
              </ActionRow>
            </Box>
          </Grid>
          <Grid item>
            <Box>
              <Typography variant="p" noWrap="true" sx={{ fontSize: "20px" }}>
                <b>$ 29.21</b>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <CustomDivider />
    </Box>
  );
};

export default CartItem;
