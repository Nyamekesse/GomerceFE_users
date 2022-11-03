import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Input } from '@mui/material';
import React, { useState } from "react";
import { TextField } from '@mui/material';
import { FormControlLabel } from '@mui/material';
import { FormControl } from '@mui/material';
import { FormLabel } from '@mui/material';
import { RadioGroup } from '@mui/material';
import { Radio } from '@mui/material';
import { Select } from '@mui/material';
import { MenuItem } from '@mui/material';
import { Slider } from '@mui/material';
import { Button } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import { Typography } from '@mui/material';
import { CheckoutSummaryPane } from './CheckoutSummaryPane';
import { outlineStyle } from './StylesCheckoutAddress';



const CheckoutAddress = () =>
{
  const handleInputChange = () => { }

  return (
    <Grid container spacing={5} sx={{ mt: 5 , mb:5 }}>
      <Grid item xs={8}>
        <Box mb={5}>Checkout</Box>
      </Grid>

      <Grid item xs={8} sx={outlineStyle}>
        <Grid item>

          <Grid container spacing={2}>
            <Grid item xs={4}>1. Address Details</Grid>
            <Grid item xs={4}>2. Delivery Method</Grid>
            <Grid item xs={4}>3. Payment Method</Grid>

          </Grid>
        </Grid>

        <Grid item xs={8}>
          <Box sx={{my:2}}>Address Details</Box>
          <Grid container>
            <Grid item xs={6}>
              <Box sx={{my:2}}>First Name</Box>
              <TextField
                id="first-name-input"
                name="first-name"
                label="First Name"
                type="text"
                onChange={handleInputChange}
              />
            </Grid>

            <Grid item xs={6}>
              <Box sx={{my:2}}>Last Name</Box>
              <TextField
                id="first-name-input"
                name="first-name"
                label="First Name"
                type="text"
                onChange={handleInputChange}
              />
            </Grid>
          </Grid>

          <Box sx={{my:2}}>Mobile Number</Box>
          <Grid container>
            <Grid item xs={6}>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={age}
                name='Select'
                label="Select"
              // onChange={}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </Grid>


            <Grid Box xs={6}>
              <TextField
                id="first-name-input"
                name="first-name"
                label="placeholder"
                type="number"
                value=''
                onChange={handleInputChange}
              />  </Grid>
          </Grid>

          <Box sx={{my:2}}>Delivery Address</Box>
          <Grid container>
            <Grid item xs={10}><TextField
              id="first-name-input"
              name="first-name"
              label="placeholder"
              type="number"
              value=''
              onChange={handleInputChange}
            /></Grid>

            <Grid item xs={6}></Grid>
          </Grid>

          <Box sx={{my:2}}>Additional Info</Box>
          <Grid container>
            <Grid item xs={10}><TextField
              id="first-name-input"
              name="first-name"
              label="placeholder"
              type="number"
              value=''
              onChange={handleInputChange}
            /></Grid>

          </Grid>
          <Grid container>
            <Grid item xs={6} sx={{my:2}}>
              <InputLabel id="demo-simple-select-label">Region/State</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={age}
                name='Select'
                label="Select"
              // onChange={}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={6} sx={{my:2}}>
              <InputLabel id="demo-simple-select-label">City</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={age}
                name='Select'
                label="Select"
              // onChange={}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </Grid>

          </Grid>
          <Button variant='contained' color='info' sx={{ mt: 1 }}>SAVE AND CONTINUE</Button>


        </Grid>

      </Grid>



      <Grid item xs={4} sx={outlineStyle}>
        <Grid item xs={12} >
          <Box>Order Summary</Box>
        </Grid>
        <CheckoutSummaryPane />
      </Grid>


    </Grid>


  );
};

export default CheckoutAddress;
