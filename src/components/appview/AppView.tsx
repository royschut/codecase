import React, { useState } from "react";
import { Container, CssBaseline, ThemeProvider } from "@material-ui/core";

import "../../App.css";
import appTheme from "../../style/appTheme";
import Registration from "../registration";
import Confirm from "../confirm";
import IUserVO from "../../vo/UserVO";
import UserVO from "../../vo/UserVO";

export declare interface props {
  onSubmitRegistration: (userVO: IUserVO) => void;
  successMessage: String;
}

export default function AppView(props: props): JSX.Element {
  const [userVO, setUserVO] = useState<UserVO>(new UserVO());

  const onRegister = (userVO: IUserVO): void => {
    setUserVO(userVO);
    props.onSubmitRegistration(userVO);
    return;
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <ThemeProvider theme={appTheme()}>
        <Container>
          {!props.successMessage && (
            <Registration
              onRegister={(userVO: IUserVO) => onRegister(userVO)}
            />
          )}
          {props.successMessage && (
            <Confirm userVO={userVO} successMessage={props.successMessage} />
          )}
        </Container>
      </ThemeProvider>
    </React.Fragment>
  );
}
