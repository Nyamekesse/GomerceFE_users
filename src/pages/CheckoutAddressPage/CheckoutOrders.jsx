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
import { orderPaneStyle } from './StylesCheckoutAddress';

export const CheckoutOrders = (props) =>
{
    return (
        <Box sx={{...orderPaneStyle, mt:2}}>
            <Grid container >
                <Grid item sm={3}>
                    <img src={props.image} alt={'phone'} width='85px'
                        height='85px'></img>

                </Grid>
                <Grid item sm={9} pl = {2}>
                    <Typography variant="p" component="p" sx={{mb:1}}>
                        SMART 6, 6.6", (2GB RAM + 32GB ROM), 5000MAH,
                        3G - BLACK
                    </Typography>
                    <Box sx={{mb:1}}>
                        <Typography variant="p" component="p">$$$$</Typography>
                    </Box>
                    <Box sx={{mb:1}}>
                        <Typography variant="p" component="p">Qty: 1</Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}