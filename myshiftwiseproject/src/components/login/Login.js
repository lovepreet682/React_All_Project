import {
    Avatar,
    Button,
    Checkbox,
    FormControlLabel,
    FormGroup,
    Grid,
    Link,
    Paper,
    TextField,
    Typography,
  } from "@mui/material";
  import React, { useState } from "react";
  import { Form } from "react-bootstrap";
  // import LockClockOutlinedIcon from "@mui/icons-material/LockClockOutlined";
  import AccountCircleIcon from '@mui/icons-material/AccountCircle';
  import axios from "axios";
  
  import { message } from "antd";
  import { useNavigate } from "react-router-dom";
  import { ClipLoader } from "react-spinners";
  // import CustomLoadingBar from "./loading-bar/LoadingBar";
  
  function Login({ onLogin }) {
    const [formData, setFormData] = useState({
      username: "",
      password: "",
    });
    const [error, setError] = useState({
      username: "",
      password: "",
    });
    const [submittedData, setSubmittedData] = useState([]);
    const [authenticated, setAuthenticated] = useState(false);
    const [showHomePage, setShowHomePage] = useState(false);
    // const [loading, setLoading] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      console.log("form data is:", formData);
      setFormData({ ...formData, [name]: value });
    };
  
    // const handleSubmit = (event) => {
    //   event.preventDefault();
  
    //   axios
    //     .post(
    //       `http://shiftwise-f79dc988f3c07bfb.elb.us-east-1.amazonaws.com:8082/usermodule/login`,
    //       formData
    //     )
    //     .then((response) => {
    //       setSubmittedData([...submittedData, response.data]);
    //       console.log("post request successful", response.data);
    //       localStorage.setItem("token", response.data.token);
    //       console.log(
    //         "getting token from local storage",
    //         localStorage.getItem("token")
    //       );
    //       message.success("Login successfull");
    //       navigate("/home");
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //       if (err.response) {
    //         // The server responded with an error
    //         if (err.response.status === 401) {
    //           // Unauthorized: Invalid username or password
    //           setError({
    //             username: "Invalid username or password",
    //             password: "",
    //             general: "",
    //           });
    //           message.error("Invalid username or password"); // Add the error message here
    //         } else {
    //           setError({ username: "", password: "", general: "Server error" });
    //         }
    //       }
    //     });
    //   //Clearing form data
    //   setFormData({
    //     username: "",
    //     password: "",
    //   });
    // };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      setIsLoading(true);
  
      try {
        const response = await axios.post(
          `http://shiftwise-f79dc988f3c07bfb.elb.us-east-1.amazonaws.com:8082/usermodule/login`,
          formData
        );
  
        setSubmittedData([...submittedData, response.data]);
        console.log("post request successful", response.data);
        localStorage.setItem("token", response.data.token);
        console.log(
          "getting token from local storage",
          localStorage.getItem("token")
        );
  
        if (response.data.invalidCredentials) {
          setError({
            username: "Invalid username or password",
            password: "",
            general: "",
          });
          message.error("Invalid username or password");
        } else {
          message.success("Login successful");
          navigate("/home");
        }
      } catch (err) {
        console.log(err);
        if (err.response) {
          if (err.response.status === 401) {
            setError({
              username: "Invalid username or password",
              password: "",
              general: "",
            });
            message.error("Invalid username or password");
          } else {
            setError({ username: "", password: "", general: "Server error" });
          }
        }
      } finally {
        // Clear loading when the request is complete
        setIsLoading(false);
      }
  
      // Clearing form data
      setFormData({
        username: "",
        password: "",
      });
    };
  
    return (
      <div className="" id="loginId">
        {/* <CustomLoadingBar color="#29d" loading={isLoading} onLoaderFinished={() => setIsLoading(false)} /> */}
        <Grid>
          <Paper elevation={10} className="paper">
            <Grid align="center">
              <Avatar className="avatar" style={{ backgroundColor: "#41b18c" }}>
                <AccountCircleIcon />
              </Avatar>
              <h4>Login </h4>
            </Grid>
            <div className="row">
              <div className="col-md-12">
              <Form onSubmit={handleSubmit}>
              <FormGroup>
                <TextField
                  // id="standard-basic"
                  label="Username"
                  name="username"
                  value={formData.username}
                  variant="standard"
                  fullWidth
                  required
                  onChange={handleChange}
                />
  
                <TextField
                  // id="standard-basic"
                  label="Password"
                  type="password"
                  value={formData.password}
                  name="password"
                  variant="standard"
                  fullWidth
                  required
                  onChange={handleChange}
                />
  
                <FormControlLabel control={<Checkbox />} label="Remember me" />
                <Button
                  style={{ margin: "8px auto" }}
                  variant="contained"
                  fullWidth
                  type="submit"
                >
                  Login
                  {/* {loading ? "Logging in..." : "Login"} */}
                </Button>
                <Typography style={{ margin: "8px auto" }}>
                  <Link href="/forgot-password">Forgot password</Link>
                </Typography>
                {isLoading && (
                <div className="loading-spinner" 
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100px', /* Adjust the height as needed */
                  
                  color: 'white',
                }}>
                  <ClipLoader color="#123abc" loading={isLoading} size={50} />
                </div>
              )}
              </FormGroup>
            </Form>
              </div>
            </div>
            
          </Paper>
        </Grid>
      </div>
    );
  }
  
  export default Login;
  