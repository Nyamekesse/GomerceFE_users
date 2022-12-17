import { ThemeProvider } from "@emotion/react";
import {
  Button,
  Grid,
  InputLabel,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { theme } from "./styles/custom-theme";
import React from "react";

const Signup = () => {
  return (
    <ThemeProvider theme={theme}>
      <Grid container direction="row" sx={{ height: "100vh" }}>
        <Grid
          container
          direction="column"
          lg={4}
          md={4}
          sm={6}
          xs={12}
          alignSelf="center"
          sx={{ p: 4 }}
        >
          <Grid container direction="column" rowGap={4}>
            <Grid container direction="column" alignItems="center">
              <Typography variant="h5">Create an account</Typography>
              <Typography variant="body2">Let's get started</Typography>
            </Grid>

            <Grid item>
              <InputLabel>Name</InputLabel>
              <TextField size="small" required fullWidth />
            </Grid>

            <Grid item>
              <InputLabel>Email</InputLabel>
              <TextField size="small" required fullWidth type="email" />
            </Grid>

            <Grid item>
              <InputLabel>Password</InputLabel>
              <TextField size="small" required fullWidth type="password" />
            </Grid>

            <Grid container direction="column" rowGap={2} alignItems="center">
              <Button variant="contained" type="submit" sx={{ px: 6 }}>
                Sign up
              </Button>

              <Typography variant="body2">
                Already have an account? <Link href="/login">Login in</Link>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          lg={8}
          md={8}
          sm={6}
          xs={false}
          sx={{
            backgroundImage: "url(Images/login.jpg)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Signup;
