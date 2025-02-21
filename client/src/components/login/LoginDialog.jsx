import { useState } from "react";
import {
  Dialog,
  Box,
  TextField,
  Typography,
  Button,
  styled,
} from "@mui/material";
import { Login } from "@mui/icons-material";
import { authenticateSignup } from "../../service/api";

const Component = styled(Box)`
  height: 70vh;
  width: 90vh;
`;

const Image = styled(Box)`
  background: #2874f0
    url("https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png")
    no-repeat center 85%;
  height: 80%;
  width: 30%;

  padding: 45px 35px;
  & > p,
  & > h5 {
    color: #ffffff;
    fontweight: bold;
  }
`;

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 20px 35px;
  flex: 1;
  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
`;

const LoginButton = styled(Button)`
  text-transform: none;
  background: #fb641b;
  color: #fff;
  height: 48px;
  border-radius: 2px;
`;

const RequestOTP = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  height: 48px;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;

const Text = styled(Typography)`
  font-size: 12px;
  color: #878787;
`;

const CreateAccount = styled(Typography)`
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  text-align: center;
  color: #2874f0;
`;

const accountInitialValues = {
  login: {
    view: "login",
    heading: "Login",
    subHeading: "Get access to your Orders, Wishlist and Recommendations",
  },
  signup: {
    view: "signup",
    heading: "Looks like you are new here!",
    subHeading: "Sign up with your mobile number to get started",
  },
};
const signupInitialValues = {
  firstName: "",
  lastName: "",
  username: "",
  email: "",
  password: "",
  phone: "",
};

function LoginDialog({ open, setOpen }) {
  // const [open, setOpen] = useState(true);
  const [account, toggleAccoutn] = useState(accountInitialValues.login);
  const [signup, setSignup] = useState(signupInitialValues);

  const handleClose = () => {
    setOpen(false);
    toggleAccoutn(accountInitialValues.login);
  };

  const toggleSignup = () => {
    toggleAccoutn(accountInitialValues.signup);
  };

  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };

  const signupUser = async () => {
    let response = await authenticateSignup(signup);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{ sx: { maxWidth: "unset" } }}
    >
      <Component>
        <Box style={{ display: "flex", height: "100%" }}>
          <Image>
            <Typography variant="h5">{account.heading}</Typography>
            <Typography style={{ MarginTop: 20 }}>
              {account.subHeading}
            </Typography>
          </Image>
          {account.view == "login" ? (
            <Wrapper>
              <TextField variant="standard" label="Enter Email/Mobile number" />
              <TextField variant="standard" label="Enter Password" />
              <Text>
                By Continuing, you agree to Flipkart's Terms of Use and Privacy
                Policy
              </Text>
              <LoginButton>Login</LoginButton>
              <Typography style={{ textAlign: "center" }}>OR</Typography>
              <RequestOTP>Request OTP</RequestOTP>
              <CreateAccount onClick={() => toggleSignup()}>
                New to Flipkart? Create an account
              </CreateAccount>
            </Wrapper>
          ) : (
            <Wrapper>
              <TextField
                variant="standard"
                onChange={(e) => onInputChange(e)}
                label="Enter FirstName "
                name="firstName"
              />
              <TextField
                variant="standard"
                onChange={(e) => onInputChange(e)}
                label="Enter LastName"
                name="lastName"
              />
              <TextField
                variant="standard"
                onChange={(e) => onInputChange(e)}
                label="Enter Username"
                name="username"
              />
              <TextField
                variant="standard"
                onChange={(e) => onInputChange(e)}
                label="Enter Email"
                name="email"
              />
              <TextField
                variant="standard"
                onChange={(e) => onInputChange(e)}
                label="Enter Password"
                name="password"
              />
              <TextField
                variant="standard"
                onChange={(e) => onInputChange(e)}
                label="Enter Phone"
                name="phone"
              />

              <LoginButton onClick={() => signupUser()}>Continue</LoginButton>
            </Wrapper>
          )}
        </Box>
      </Component>
    </Dialog>
  );
}

export default LoginDialog;
