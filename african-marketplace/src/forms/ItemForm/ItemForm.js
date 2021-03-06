import "./ItemForm.css";
import React, { useState, useEffect } from "react";
import Form from "./Form";
// import axios from "axios";
import formSchema from "./formSchema";
import * as yup from "yup";
import { connect } from "react-redux";
import { addItem } from "./../../store/actions";
import { useHistory } from "react-router-dom";

const initialFormValues = {
  ///// DROP DOWN /////
  location: "",
  ///// TEXT INPUTS /////
  name: "",
  description: "",
  itemcost: null,
};
const initialFormErrors = {
  ///// TEXT INPUT ERRORS /////
  ///// DROP DOWN /////
  location: "",
  ///// TEXT INPUTS /////
  name: "",
  description: "",
  itemcost: null,
};

// const initialItemForm = [];
const initialDisabled = true;

function ItemForm(props) {
  const [formValues, setFormValues] = useState(initialFormValues); // object
  const [formErrors, setFormErrors] = useState(initialFormErrors); // object
  const [disabled, setDisabled] = useState(initialDisabled);
  //   const [itemForm, setItemForm] = useState(initialItemForm);

  const history = useHistory();
  //   console.log("additem", props);

  const postNewItemForm = (newItemForm) => {
    // go to actions.index.js
    props.addItem(newItemForm);
    history.push("/dashboard");
    setFormValues(initialFormValues);
  };
  //////////////// EVENT HANDLERS ////////////////
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
    const newItemForm = {
      name: formValues.name.trim(),
      description: formValues.description.trim(),
      itemcost: formValues.itemcost.trim(),
    };
    postNewItemForm(newItemForm);
  };

  useEffect(() => {
    formSchema.isValid(formValues).then((valid) => setDisabled(!valid));
  }, [formValues]);

  return (
    <div className="itemForm">
      <header className="itemForm-header">
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

export default connect(null, { addItem })(ItemForm);
