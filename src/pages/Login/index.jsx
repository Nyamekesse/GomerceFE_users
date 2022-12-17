import React, { FormEvent, useRef } from "react";
import Grid from "@mui/material/Grid";
import {
  Box,
  Button,
  InputLabel,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./styles/custom-theme";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <ThemeProvider theme={theme}>
      <Grid container direction="row" sx={{ height: "100vh" }}>
        <Grid
          item
          lg={8}
          md={8}
          sm={6}
          xs={false}
          sx={{
            backgroundImage: "url(Images/login.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <Grid
          container
          alignSelf="center"
          lg={4}
          md={4}
          sm={6}
          xs={12}
          sx={{ p: 4 }}
        >
          <Grid container direction="column" alignItems="center" rowGap={2}>
            <Typography variant="h5">Welcome back</Typography>
            <Typography variant="body2">Please enter your details</Typography>
          </Grid>
          <Grid container component="form" rowGap={4} onSubmit={handleSubmit}>
            <Grid container direction="column">
              <InputLabel>Email</InputLabel>
              <TextField
                size="small"
                required
                fullWidth
                type="email"
                autoComplete="email"
                autoFocus
                ref={emailRef}
              />
            </Grid>
            <Grid container direction="column">
              <InputLabel>Password</InputLabel>
              <TextField
                size="small"
                required
                fullWidth
                type="password"
                ref={passwordRef}
              />
            </Grid>

            <Grid container direction="column" rowGap={2} alignItems="center">
              <Button variant="contained" type="submit" sx={{ px: 6 }}>
                Sign in
              </Button>

              <Typography variant="body2">
                Don't have an account? <Link href="/signup">Sing up</Link>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Login;
