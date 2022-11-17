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
import phone from './phone1.jfif'

export const CheckoutSubtotal = (props) =>
{
    return (
        <Box mb={1}>
            <Grid container 
            justifyContent="center"
            alignItems="center" sx={{mt:3, width:'100%'}}>


                <Grid item xs={3}>
                    <Typography variant="p" component="p">
                        {props.text1}
                    </Typography>
                </Grid>
                <Grid item xs={6}>

                </Grid>
                <Grid item xs={3} >
                    <Typography variant="p" component="p">
                        {props.price }
                    </Typography>
                </Grid>

            </Grid>
        </Box>
    )
}