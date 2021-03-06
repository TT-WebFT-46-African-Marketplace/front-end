import React, { useState, useEffect } from "react";
import SignUpForm from "./SignUpForm";
import styled from "styled-components";
import axios from "axios";
import * as yup from "yup";
import registerSchema from "./validation/RegisterSchema";
import { useHistory } from "react-router-dom";
// import { axiosWithAuth } from "../../helpers/axiosWithAuth";

const Background = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url("https://images.pexels.com/photos/1128678/pexels-photo-1128678.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
`;

const FormContainer = styled.div`
  text-align: center;
  height: 100vh;
  font-family: "Open Sans", Helvetica, sans-serif;
  /* animation:  2s ease-in-out; */

  h1 {
    font-size: 4rem;
    color: #fff;
    display: inline-block;
    margin-top: 3rem;
  }
`;

const SignUp = () => {
  const history = useHistory();

  const initialFormValues = {
    // first_name: "",
    // last_name: "",
    username: "",
    primaryemail: "",
    password: "",
    // confirm_password: "",
    // terms: false,
  };

  const initialErrors = {
    // first_name: "",
    // last_name: "",
    username: "",
    primaryemail: "",
    password: "",
    // confirm_password: "",
  };

  // const allUsers = [];

  const initialDisabled = true;

  // const [users, setUsers] = useState(allUsers);

  const [formValues, setFormValues] = useState(initialFormValues);

  const [errors, setErrors] = useState(initialErrors);

  const [disabled, setDisabled] = useState(initialDisabled);

  const inputChange = (name, value) => {
    yup
      .reach(registerSchema, name)
      .validate(value)
      .then(() => {
        setErrors({ ...errors, [name]: "" });
      })
      .catch((err) => {
        setErrors({ ...errors, [name]: err.errors[0] });
      });

    setFormValues({ ...formValues, [name]: value });
  };

  const registerSubmit = () => {
    const newUser = {
      // first_name: formValues.first_name.trim(),
      // last_name: formValues.last_name.trim(),
      username: formValues.username.trim(),
      primaryemail: formValues.primaryemail.trim(),
      password: formValues.password.trim(),
      // confirm_password: formValues.confirm_password.trim(),
      // terms: formValues.terms,
    };

    postNewUser(newUser);
  };

  // useEffect(() => {
  //   const getData = () => {
  //     axios
  //       .get("https://webft-46-african-marketplace.herokuapp.com/")
  //       .then((res) => {
  //         setUsers(res.data);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };
  //   getData();
  // }, [setUsers]);

  const postNewUser = (newUser) => {
    console.log({ newUser });
    axios
      .post(
        "https://webft-46-african-marketplace.herokuapp.com/createnewuser",
        newUser
      )
      .then((res) => {
        localStorage.setItem("token", res.data.access_token);
        history.push("/dashboard");
      })
      .catch((err) => {
        console.log({ err });
      });
    setFormValues(initialFormValues);
  };

  useEffect(() => {
    registerSchema.isValid(formValues).then((valid) => setDisabled(!valid));
  }, [formValues]);

  return (
    <Background>
      <FormContainer className="form-container">
        <h1>Register Here</h1>
        <SignUpForm
          values={formValues}
          change={inputChange}
          submit={registerSubmit}
          errors={errors}
          disabled={disabled}
        />
      </FormContainer>
    </Background>
  );
};

export default SignUp;
