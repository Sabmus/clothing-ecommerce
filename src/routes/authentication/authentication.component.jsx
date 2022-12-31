import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import LoginForm from "../../components/login-form/login-form.component";

import { AuthContainer } from "./authentication.styles";

const Authentication = () => {
  return (
    <AuthContainer>
      <LoginForm />
      <SignUpForm />
    </AuthContainer>
  );
};

export default Authentication;
