import { useState } from "react";
import { useDispatch } from "react-redux";

import {
  googleSignInStart,
  emailSignInStart,
} from "../../store/user/user.action";

import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_STYLES } from "../button/button.component";

import { SignUpContainer, ButtonsContainer } from "./login-form.styles";

const initialFormFields = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(initialFormFields);
  const { email, password } = formFields;

  const logInGoogleUser = async () => {
    dispatch(googleSignInStart());
  };

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(initialFormFields);
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    try {
      dispatch(emailSignInStart(email, password));
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Invalid credentials");
          break;
        case "auth/user-not-found":
          alert("Invalid credentials");
          break;
        default:
          console.log(error);
      }
    }
  };

  return (
    <SignUpContainer>
      <h2>have an account?</h2>
      <span>Log in with your email and password</span>
      <form onSubmit={submitHandler}>
        <FormInput
          label="Email"
          type="text"
          name="email"
          value={email}
          onChange={changeHandler}
          required
          autoFocus
        />

        <FormInput
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={changeHandler}
          required
        />

        <ButtonsContainer>
          <Button type="submit">Sign In</Button>
          <Button
            type="button"
            buttonType={BUTTON_STYLES.google}
            onClick={logInGoogleUser}
          >
            Google LogIn
          </Button>
        </ButtonsContainer>
      </form>
    </SignUpContainer>
  );
};

export default LoginForm;
