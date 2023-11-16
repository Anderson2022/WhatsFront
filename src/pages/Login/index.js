import React, { useState, useContext } from "react";
import { Link as RouterLink } from "react-router-dom";

import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Grid,
  Box,
  Typography,
  Container,
  InputAdornment,
  IconButton,
  Link
} from '@material-ui/core';

import { LockOutlined, Visibility, VisibilityOff } from '@material-ui/icons';

import { makeStyles } from "@material-ui/core/styles";

import { i18n } from "../../translate/i18n";

import { AuthContext } from "../../context/Auth/AuthContext";

// const Copyright = () => {
// 	return (
// 		<Typography variant="body2" color="textSecondary" align="center">
// 			{"Copyleft "}
// 			<Link color="inherit" href="https://github.com/canove">
// 				Canove
// 			</Link>{" "}
// 			{new Date().getFullYear()}
// 			{"."}
// 		</Typography>
// 	);
// };

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "#fc7000", // Altera a cor de fundo para cinza
    padding: theme.spacing(2), // Adiciona algum preenchimento para espaçamento interno
    borderRadius: theme.spacing(1), // Adiciona borda arredondada
    boxShadow: '2px 2px 4px #000000',
  },
  shieldIcon: {
    fontSize: theme.spacing(6), // Define o tamanho do ícone
    // Define a cor do ícone para vermelho
  },
  blackBackground: {
    position: "relative",
    "&::after": {
      content: '""',
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%",
      height: "2px", // Ajuste a altura conforme necessário
      backgroundColor: "black",
      display: "block",
    },
  },
  whiteText: {
    color: "white",
    fontSize: "16px", // Ajuste o tamanho do texto conforme necessário
  },

  labelWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: '-29px',
    marginLeft: '13px',
    background: "black",
    width: "20%",
    borderRadius: '10px',
    position: "relative",
    zIndex: 1,
  },
  customBackground: {
    padding: '', // Ajuste o preenchimento conforme necessário
    borderRadius: theme.spacing(1), // Adicione borda arredondada se desejar
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: '#161616',
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    color: "white",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Login = () => {
  const classes = useStyles();

  const [user, setUser] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const { handleLogin } = useContext(AuthContext);

  const handleChangeInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handlSubmit = (e) => {
    e.preventDefault();
    handleLogin(user);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          {i18n.t("login.title")}
        </Typography>
        <form className={classes.form} noValidate onSubmit={handlSubmit}>
          <div className={classes.customBackground}>
            <div className={classes.labelWrapper}>
              <span className={`${classes.blackBackground} ${classes.whiteText}`}>
                {i18n.t("login.form.email")}
              </span>
            </div>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              name="email"
              value={user.email}
              onChange={handleChangeInput}
              autoComplete="email"
              autoFocus
            />
          </div>
          <div className={classes.customBackground}>
            <div className={classes.labelWrapper}>
              <span className={`${classes.blackBackground} ${classes.whiteText}`}>
                {i18n.t("login.form.password")}
              </span>
            </div>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            id="password"
            value={user.password}
            onChange={handleChangeInput}
            autoComplete="current-password"
            type={showPassword ? 'text' : 'password'}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword((e) => !e)}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              )
            }}
            />
          </div>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            style={{ backgroundColor: "black", color: "white", boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }} // Adicione esta linha para definir a cor do botão como preta
            className={classes.submit}
          >
            {i18n.t("login.buttons.submit")}
          </Button>
          <Grid container>
            <Grid item>
              <Link
                href="#"
                variant="body2"
                component={RouterLink}
                to="/signup"
                style={{ color: "white" }}
              >
                {i18n.t("login.buttons.register")}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>{/* <Copyright /> */}</Box>
    </Container>
  );
};

export default Login;
