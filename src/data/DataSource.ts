import axios from "axios";

import Constants from "./Constants";
import IUserVO from "../vo/UserVO";

export default class DataSource {
  str: String = "";
  callback: Function = (): void => {};

  register = (userVO: IUserVO, callback: Function) => {
    this.callback = callback;

    axios({
      method: "post",
      url: Constants.API + "",
      data: userVO,
    })
      .then((response) => this.handleResponse(response))
      .catch((response) =>
        console.log("Couldn't connect, or not certified! Error:", response)
      );
  };
  handleResponse = (response: any) => {
    console.log(response);
    if (!response.status) {
      console.log("No status!");
    } else if (response.status === 403) {
      console.log("Forbidden!");
    } else if (response.status === 200) {
      console.log("Success!", response.data);
      this.callback(response.data.message);
    }
  };
}
