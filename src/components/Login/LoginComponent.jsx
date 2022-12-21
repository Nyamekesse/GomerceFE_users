import React from "react";

import Grid from "@mui/material/Grid";
import { Button, InputLabel, Link, TextField, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";

const LoginComponent = () => {
  // References
  const emailRef = useRef();

  // States
  const [email, setEmail] = useState("");

  const [errMsg, setErrMsg] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  // Autofocus

  useEffect(() => {
    emailRef.current.getElementsByTagName("input")[0].focus();
  }, []);

  const handleSubmit = async (event) => [
    console.log(
      "You tried to login! \nFeature coming soon, please come back later!"
    ),
  ];
  return (
    <Grid container direction="row" sx={{ height: "100vh" }}>
      <Grid
        item
        lg={8}
        md={8}
        sm={6}
        sx={{
          backgroundImage: "url(Images/login.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <Grid item alignSelf="center" lg={4} md={4} sm={6} xs={12} sx={{ p: 4 }}>
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
              ref={emailRef}
              type="email"
              autoComplete="email"
              autoFocus
            />
          </Grid>
          <Grid container direction="column">
            <InputLabel>Password</InputLabel>
            <TextField size="small" required fullWidth type="password" />
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
  );
};

export default LoginComponent;
