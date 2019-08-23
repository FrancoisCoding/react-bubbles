import React from "react";
import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { ButtonContainer } from "../styled-components/Button";
import axios from "axios";

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>
    </>
  );
};

export default Login;
