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

export const CheckoutOrders = (props) =>
{
    return (
        <Box sx={{mt:2}}>
            <Grid container >
                <Grid item xs={3}>
                    <img src={props.image} alt={'phone'} width='100px'
                        height='100px'></img>

                </Grid>
                <Grid item xs={9}>
                    <Typography variant="p" component="p">
                        SMART 6, 6.6", (2GB RAM + 32GB ROM), 5000MAH,
                        3G - BLACK
                    </Typography>
                    <Box>
                        $$$$
                    </Box>
                    <Box>
                        Qty: 1
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}