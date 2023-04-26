import { useState } from "react";
import { Avatar, Snackbar } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Alert from "@mui/material/Alert";
import Typography from "@mui/material/Typography";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { UserItem } from "../../@types/general";

interface LoginFormData {
  email: string;
  password: string;
}

const validationSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
});

const Login = () => {
  const navigate = useNavigate();

  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);

  const { values, handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values: LoginFormData) => {
      const users = JSON.parse(localStorage.getItem("user") || "") || [];
      const user = users.find(
        (user: UserItem) =>
          user.email === values.email && user.password === values.password
      );
      if (!user) {
        setIsSnackbarOpen(true);
        return;
      }
      // If user isn't found, function will stop here
      const now = new Date();
      // Add 24 hours (in milliseconds) to the current time
      const twentyFourHoursFromNow = new Date(
        now.getTime() + 24 * 60 * 60 * 1000
      );
      // Convert the timestamp to a string in ISO format
      const timestamp = twentyFourHoursFromNow.toISOString();
      localStorage.setItem("token", timestamp);
      navigate("/");
    },
  });

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: "url(https://source.unsplash.com/random)",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            <TextField
              name="email"
              fullWidth
              id="email"
              label="Email"
              value={values.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
              sx={{ my: 2 }}
            />
            <TextField
              type="password"
              name="password"
              fullWidth
              label="Password"
              value={values.password}
              onChange={handleChange}
              error={!!errors.password}
              helperText={errors.password}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Typography variant="body2">Forgot password?</Typography>
              </Grid>
              <Grid item>
                <Link to="/register">{"Don't have an account? Sign Up"}</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
      <Snackbar
        open={isSnackbarOpen}
        autoHideDuration={6000}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        onClose={() => setIsSnackbarOpen(false)}
      >
        <Alert
          onClose={() => setIsSnackbarOpen(false)}
          severity="error"
          sx={{ width: "100%" }}
        >
          Incorrect Credentials
        </Alert>
      </Snackbar>
    </Grid>
  );
};

export default Login;
