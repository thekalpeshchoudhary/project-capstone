import { useState } from "react";
import { useDispatch } from "react-redux";

import { signUpStart } from "../../store/user/user.action";

import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";

import { SignUpContainer, FormTitle } from "./sign-up-form.styles.jsx";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChanges = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Password Mismatch!");
      return;
    }
    try {
      dispatch(signUpStart(email, password, displayName));
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Email already in use");
      } else {
        console.log("User creation failed : ", error);
      }
    }
  };

  return (
    <SignUpContainer>
      <FormTitle>Don't have an account?</FormTitle>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          required
          onChange={handleChanges}
          value={displayName}
          name="displayName"
          type="text"
        />
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
        <FormInput
          label="Confirm Password"
          required
          onChange={handleChanges}
          value={confirmPassword}
          name="confirmPassword"
          type="password"
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </SignUpContainer>
  );
};

export default SignUpForm;
