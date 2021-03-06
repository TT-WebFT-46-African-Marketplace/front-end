import "./Login.css";
import React, { useState, useEffect } from "react";
import Form from "./Form";
// import axios from "axios";
import formSchema from "./formSchema";
import * as yup from "yup";

import { useHistory } from "react-router-dom";

// import axios from "axios";

const initialFormValues = {
  ///// TEXT INPUTS /////
  username: "",
  password: "",
};
const initialFormErrors = {
  ///// TEXT INPUT ERRORS /////
  username: "",
  password: "",
};

const initialLogin = [];
const initialDisabled = true;

function Login() {
  const [formValues, setFormValues] = useState(initialFormValues); // object
  const [formErrors, setFormErrors] = useState(initialFormErrors); // object
  const [disabled, setDisabled] = useState(initialDisabled);
  const [logins, setLogins] = useState(initialLogin);

  const history = useHistory();

  const postNewLogin = (newLogin) => {
    setLogins([newLogin, ...logins]);
    history.push("/dashboard");
    // login endpoint not working so making a force push without authorization

    //     axiosWithAuth()
    //       .post("/login", newLogin)
    //       .then((res) => {
    //         localStorage.setItem("token", res.data.access_token)
    //         history.push("/dashboard");
    //       })
    //       .catch((err) => {
    //         console.log(err);
    //       });
    //   };

    setFormValues(initialFormValues);
  };

  const inputChange = (name, value) => {
    yup
      .reach(formSchema, name)
      .validate(value)
      .then(() => {
        setFormErrors({ ...formErrors, [name]: "" });
      })

      .catch((err) => {
        setFormErrors({ ...formErrors, [name]: err.errors[0] });
      });
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const formSubmit = () => {
    const newLogin = {
      username: formValues.username.trim(),
      password: formValues.password.trim(),
    };
    postNewLogin(newLogin);
  };

  useEffect(() => {
    formSchema.isValid(formValues).then((valid) => setDisabled(!valid));
  }, [formValues]);

  return (
    <div className="Login">
      <header className="Login-header">
        <Form
          values={formValues}
          change={inputChange}
          submit={formSubmit}
          disabled={disabled}
          errors={formErrors}
        />
      </header>
    </div>
  );
}

export default Login;
