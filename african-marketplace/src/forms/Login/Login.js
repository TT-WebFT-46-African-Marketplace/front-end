import "./Login.css";
import React, {useState, useEffect} from 'react'
import Form from './Form'
import axios from "axios";
import formSchema from './formSchema'
import * as yup from 'yup'

const initialFormValues = {
///// TEXT INPUTS /////
userName:'',
password:'',
}
const initialFormErrors = {
  ///// TEXT INPUT ERRORS /////
  userName:'',
  password:'',
}

const initialLogin = []
const initialDisabled = true

function Login() {
  const [formValues, setFormValues] = useState(initialFormValues) // object
  const [formErrors, setFormErrors] = useState(initialFormErrors) // object
  const [disabled, setDisabled] = useState(initialDisabled)
  const [logins, setLogins] = useState(initialLogin)

  const postNewLogin= newLogin => {
    axios.post(newLogin)
    .then(res => {
      setLogins([res.data, ...logins])
    })
    .catch(err => {
      console.log(err);
    })
    setFormValues(initialFormValues)
  }

  const inputChange = (name,value)  => {
    yup.reach(formSchema,name)
    .validate(value)
    .then(() => { 
      setFormErrors({...formErrors,[name]: ''})
    })
      
      .catch(err => {
        setFormErrors({...formErrors,[name]: err.errors[0]})
    })
    setFormValues({
      ...formValues,
      [name]:value
    })
  }

  const formSubmit = () =>{
    const newLogin = {
      userName: formValues.userName.trim(),
      password: formValues.password.trim(),
    }
    postNewLogin(newLogin)
  }

  useEffect(() => {
    formSchema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])


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
