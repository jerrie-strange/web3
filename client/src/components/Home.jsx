import React from "react";
import { Button } from "./Button";
import { Input } from "./Input";
import "./styles.css";
export const Home = () => {
  return (
    <div className="bg">
        <center>
            <br />
      <h1>Welcome to Solidity Bank</h1>
      <h2>Using Smart contracts to make a smarter banking system</h2>
      <br />
      <div className="form-control">
        <form action="">
          <fieldset>
            <legend>Login Into Your Valut</legend>
            <label htmlFor="username">Username</label>
            <br />
            <br />
            <Input type="text" placeholder="Bank Id" />
            <br />
            <br />
            <label htmlFor="password"> Password</label>
            <br />
            <br />
            <Input type="password" name="" id="" placeholder="Bank Pass" />
            <br />
            <label htmlFor="forgot password">forgot password?</label>
            <div className="button">
              <Button color="primary" value="Login" />
              <Button color="success" value="Sign-up" />
            </div>
          </fieldset>
        </form>
      </div>
      </center>
    </div>
  );
};
