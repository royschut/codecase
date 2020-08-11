import React from "react";
import { Typography } from "@material-ui/core";
import IUserVO from "../../vo/UserVO";

export declare interface props {
  userVO: IUserVO;
  successMessage: String;
}
export default function Confirm(props: props): JSX.Element {
  return (
    <React.Fragment>
      <Typography variant="h3">{props.successMessage}</Typography>
      <Typography variant="body1">
        {props.userVO.first +
          " " +
          props.userVO.infix +
          " " +
          props.userVO.last}
      </Typography>
      <Typography variant="body1">{props.userVO.email}</Typography>
    </React.Fragment>
  );
}
