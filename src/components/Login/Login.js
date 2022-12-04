import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginCreate from "./LoginCreate";
import LoginForgot from "./LoginForgot";
import LoginForm from "./LoginForm";
import LoginReset from "./LoginReset";

const Login = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="create" element={<LoginCreate />} />
        <Route path="forgot" element={<LoginForgot />} />
        <Route path="reset" element={<LoginReset />} />
      </Routes>
    </div>
  );
};

export default Login;
