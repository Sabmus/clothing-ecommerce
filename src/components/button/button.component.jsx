import { BaseButton, GoogleButton, InvertedButton } from "./button.styles";

export const BUTTON_STYLES = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

const getButton = (buttonType = BUTTON_STYLES.base) =>
  ({
    [BUTTON_STYLES.base]: BaseButton,
    [BUTTON_STYLES.google]: GoogleButton,
    [BUTTON_STYLES.inverted]: InvertedButton,
  }[buttonType]);

const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);

  return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;
