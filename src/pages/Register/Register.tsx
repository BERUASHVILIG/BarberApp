import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Grid, Box, Typography } from "@mui/material";
import * as yup from "yup";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Container from "@mui/material/Container";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
interface RegisterFormData {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  password2: string;
}

const initialValues: RegisterFormData = {
  firstName: "",
  lastName: "",
  username: "",
  email: "",
  password: "",
  password2: "",
};

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
  password2: yup
    .string()
    .oneOf([yup.ref("password"), ""], "Passwords must match"),
});

const Register = () => {
  const navigate = useNavigate();
  const { values, handleSubmit, handleChange, errors } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values: RegisterFormData) => {
      const users = JSON.parse(localStorage.getItem("user")!) || [];
      localStorage.setItem("user", JSON.stringify([...users, values]));
      navigate("/");
    },
  });

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="firstName"
                fullWidth
                id="firstName"
                label="First Name"
                value={values.firstName}
                onChange={handleChange}
                error={!!errors.firstName}
                helperText={errors.firstName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="lastName"
                fullWidth
                id="lastName"
                label="Last Name"
                value={values.lastName}
                onChange={handleChange}
                error={!!errors.lastName}
                helperText={errors.lastName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="username"
                fullWidth
                id="userName"
                label="Username"
                value={values.username}
                onChange={handleChange}
                error={!!errors.username}
                helperText={errors.username}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="email"
                fullWidth
                id="email"
                label="mail"
                value={values.email}
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
              />
            </Grid>
            <Grid item xs={6}>
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
            </Grid>
            <Grid item xs={6}>
              <TextField
                type="password"
                name="password2"
                fullWidth
                label="Confirm Password"
                value={values.password2}
                onChange={handleChange}
                error={!!errors.password2}
                helperText={errors.password2}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link to="/login">Already have an account? Sign in</Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Register;
