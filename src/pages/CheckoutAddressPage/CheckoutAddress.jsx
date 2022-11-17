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
import { flexBasisfull, outlineStyle, saveAndContinueBg, textStyle, widthfull } from './StylesCheckoutAddress';



const CheckoutAddress = () =>
{
  const handleInputChange = () => { }

  return (
    <Grid container justifyContent="start"
      alignItems="start" spacing={5} 
      sx={{ ...textStyle, mt: 2, mb: 5, px: 0 }}>


      <Grid item justifyContent="start"
        alignItems="center" md={8} sx={{width:"100%"}}>

        <Grid item justifyContent="center"
          alignItems="center" md={8}>
          <Box sx={{ mb: 3, px:5}}>Checkout</Box>
        </Grid>

        <Grid item  sx={{  px:5, mb:5}}>
          <Grid container justifyContent="start"
            alignItems="center" spacing={2}>
            <Grid item md={4}>1. Address Details</Grid>
            <Grid item md={4}>2. Delivery Method</Grid>
            <Grid item md={4}>3. Payment Method</Grid>

          </Grid>
        </Grid>

        <Grid item  md={8}
          sx={{...outlineStyle, width: "100%", 
          maxWidth: "100%", minWidth: "100%", px:5, pb:5}}>
          
          <Box sx={{ mt: 2, mb: 1 }} >Address Details</Box>
          
          <Grid container >
            <Grid item md={6}>
              <Box sx={{ mt: 0, mb: 1 }}>First Name</Box>
              <TextField
                id="first-name-input"
                name="first-name"
                label="First Name"
                type="text"
                onChange={handleInputChange}
              />
            </Grid>

            <Grid item md={6}>
              <Box sx={{ mt: 0, mb: 1 }}>Last Name</Box>
              <TextField
                id="first-name-input"
                name="first-name"
                label="First Name"
                type="text"
                onChange={handleInputChange}
              />
            </Grid>
          </Grid>

          <Box sx={{ mt: 3, mb: 1 }}>Mobile Number</Box>
          <Grid container>
            <Grid item md={6}>
              {/* <InputLabel id="demo-simple-select-label">Country Code</InputLabel> */}
              <TextField
                id="country-code"
                name="country-code"
                label='country-code'
                select
                width='50%'
                value=''
                type='number'
                // helperText="Please select your region/state'
                // sx={widthfull}
                onChange={handleInputChange}
              />
            </Grid>


            <Grid Box md={6}>
              <TextField
                id="first-name-input"
                name="first-name"
                label="placeholder"
                type="number"
                value=''
                onChange={handleInputChange}
              />  </Grid>
          </Grid>

          <Box sx={{ my: 2 }}>Delivery Address</Box>
          <Grid container justifyContent="start"
            alignItems="center" >
            <Grid item md={12}>
              <TextField
                id="first-name-input"
                name="delivery-address"
                // label="placeholder"
                multiline
                rows={2}
                value=''
                type='text'
                onChange={handleInputChange}
                sx={widthfull}
              /></Grid>

            <Grid item md={6}></Grid>
          </Grid>

          <Box sx={{ my: 2 }}>Additional Info</Box>
          <Grid container justifyContent="start"
            alignItems="center">
            <Grid item md={12}>
              <TextField
                id="first-name-input"
                name="additional-info"
                // label="placeholder"
                multiline
                rows={2}
                value=''
                type='text'
                sx={widthfull}
                onChange={handleInputChange}
              /></Grid>

          </Grid>
          <Grid container justifyContent="start"
            alignItems="center" >
            <Grid item md={12} sx={{  my: 2 }}>
              <InputLabel id="demo-simple-select-label">Region/State</InputLabel>
              <TextField
                id="first-name-input"
                name="region/state"
                label='open this select'
                select
                value=''
                type='text'
                sx={widthfull}

                onChange={handleInputChange}
              />
            </Grid>
          </Grid>
          <Grid container justifyContent="start"
            alignItems="center">
            <Grid item md={12} sx={{ my: 2 }}>
              <InputLabel id="demo-simple-select-label">City</InputLabel>
              <TextField
                id="first-name-input"
                name="city"
                label='open this select'
                select
                width='100%'
                value=''
                type='text'
                // helperText="Please select your region/state"

                sx={widthfull}
                onChange={handleInputChange}
              />
            </Grid>

          </Grid>
          <Button variant='contained' color='info' sx={{ ...saveAndContinueBg,  mt: 1 }}>SAVE AND CONTINUE</Button>


        </Grid>

      </Grid>



      <Grid item md={4} sx={{ px: 5 }}>
        <Box>Order Summary</Box>
        <CheckoutSummaryPane />
      </Grid>


    </Grid>


  );
};

export default CheckoutAddress;
