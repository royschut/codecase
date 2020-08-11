// import { string } from "yup";
import UserVO from "../vo/UserVO";

export default interface IValidator {
  validateUserVO(
    userVO: UserVO,
    succesFunc: Function,
    errorFunc: Function
  ): void;
  userSchema: Object;
}

export default class Validator {
  validateUserVO(userVO: UserVO, succesFunc: Function, errorFunc: Function) {
    const yup = require("yup");
    const userSchema = yup.object().shape({
      first: yup.string().required(),
      infix: yup.string(),
      last: yup.string(),
      email: yup.string().email(),
    });
    userSchema
      .validate(userVO)
      .then((value: any) => {
        succesFunc();
      })
      .catch((err: any) => {
        console.log("error on: " + err);
        errorFunc(err);
      });
  }
}
