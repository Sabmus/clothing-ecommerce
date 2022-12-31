import { useState } from "react";
import { createAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import { createUserDocumentFromAuth } from "../../utils/firebase/firestore-db.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import { SignUpContainer } from "./sign-up-form.styles";

const initialFormFields = {
  displayName: "",
  email: "",
  password: "",
  passwordConfirm: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(initialFormFields);
  const { displayName, email, password, passwordConfirm } = formFields;

  const resetFormFields = () => {
    setFormFields(initialFormFields);
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    if (password !== passwordConfirm) {
      alert("passwords do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Email already in use");
      } else {
        console.log(error.code);
      }
    }
  };

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignUpContainer>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={submitHandler}>
        <FormInput
          label="Name"
          type="text"
          name="displayName"
          value={displayName}
          onChange={changeHandler}
          required
          autoFocus
        />

        <FormInput
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={changeHandler}
          required
        />

        <FormInput
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={changeHandler}
          required
        />

        <FormInput
          label="Confirm Password"
          type="password"
          name="passwordConfirm"
          value={passwordConfirm}
          onChange={changeHandler}
          required
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </SignUpContainer>
  );
};

export default SignUpForm;
