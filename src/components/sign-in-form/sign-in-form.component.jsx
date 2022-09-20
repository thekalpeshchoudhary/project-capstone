import { useState } from "react";

import { useDispatch } from "react-redux";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../store/user/user.action";

import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import {
  SignUpContainer,
  FormTitle,
  ButtonsContainer,
} from "./sign-in-form.styles.jsx";

const defaultFormFields = {
  email: "",
  password: "",
};
const SignInForm = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInGoogleUser = async () => {
    dispatch(googleSignInStart());
  };

  const handleChanges = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!email || !password) return;
    try {
      dispatch(emailSignInStart(email, password));
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/user-not-found":
          alert("Incorrect Email");
          break;
        case "auth/wrong-password":
          alert("Incorrect password");
          break;
        default:
          console.log(`Sign In Error : ${error}`);
      }
    }
  };

  return (
    <SignUpContainer>
      <FormTitle>Already have an account?</FormTitle>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          required
          onChange={handleChanges}
          value={email}
          name="email"
          type="email"
        />
        <FormInput
          label="Password"
          required
          onChange={handleChanges}
          value={password}
          name="password"
          type="password"
        />
        <ButtonsContainer>
          <Button type="submit">Sign In</Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={signInGoogleUser}
          >
            Google sign In
          </Button>
        </ButtonsContainer>
      </form>
    </SignUpContainer>
  );
};

export default SignInForm;
