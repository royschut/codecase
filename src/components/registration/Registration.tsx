import React, { useState, FormEvent, ChangeEvent } from "react";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

import UserVO from "../../vo/UserVO";
import IUserVO from "../../vo/UserVO";
import Validator from "../../util/Validator";

export declare interface props {
  onRegister: (userVO: IUserVO) => void;
}

export default function Registration(props: props): JSX.Element {
  const [userVO, setUserVO] = useState<UserVO>(new UserVO());
  const [isLoading, setIsLoading] = useState();
  const [error, setError] = useState("");

  const handleChange = (changeObj: Object): void => {
    setUserVO(
      (prevState: IUserVO): IUserVO => {
        return { ...prevState, ...changeObj };
      }
    );
    setError("");
  };

  const onSubmit = (e: FormEvent): void => {
    e.preventDefault();
    const validator = new Validator();
    validator.validateUserVO(
      userVO,
      () => {
        setError("");
        setIsLoading(true);
        props.onRegister(userVO);
      },
      (err: any) => {
        setError(String(err));
        console.log(String(err));
      }
    );
  };
  return (
    <React.Fragment>
      <form onSubmit={(e: FormEvent) => onSubmit(e)}>
        <Typography variant="h4">Registration</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={5}>
            <TextField
              autoComplete="fname"
              id="first"
              name="first"
              variant="outlined"
              required
              disabled={isLoading}
              fullWidth
              label="First Name"
              autoFocus
              value={userVO.first}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleChange({ first: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={2} sm={2}>
            <TextField
              autoComplete="infix"
              id="infix"
              name="infix"
              variant="outlined"
              disabled={isLoading}
              label="infix"
              value={userVO.infix}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleChange({ infix: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={10} sm={5}>
            <TextField
              variant="outlined"
              required
              disabled={isLoading}
              fullWidth
              id="last"
              label="Last Name"
              name="last"
              autoComplete="lname"
              value={userVO.last}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleChange({ last: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              disabled={isLoading}
              fullWidth
              id="email"
              label="E-mail Address"
              name="email"
              autoComplete="email"
              value={userVO.email}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleChange({ email: e.target.value })
              }
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          disabled={isLoading}
        >
          Sign Up
        </Button>
        <Typography variant="h5">{error}</Typography>
      </form>
    </React.Fragment>
  );
}
