import React from 'react';
import styled from 'styled-components';

const FormGroups = styled.div`
    display: flex;
    flex-flow: row wrap;
    background: rgba(0, 0, 0, 0.5);
    height: 25rem;
    padding: 3rem 3rem 9rem 3rem;
    margin: 1rem 30rem;
    border-radius: 5%;
    font-family: "Open Sans", Helvetica, sans-serif;

    @media (max-width: 1425px) {
        padding: 3rem 3rem 2rem 3rem;
        height: 35rem;
        margin: 0 25rem;
  }

    @media (max-width: 1400px) {
        padding: 3rem 3rem 2rem 3rem;
        height: 35rem;
  }

    @media (max-width: 1200px) {
        padding: 1rem 0rem 3rem 0rem;
        height: 36rem;
  }


    label{
        display: flex;
        flex-flow: column;
        padding: 1rem;
        color:white;
        font-size: 1.2rem;
    }

    input{
        margin-top: 0.5rem;
    }
`

const Terms = styled.label`
    display:flex;
    flex-flow: row nowrap !important;

    input{
    margin-top: 0 !important;
    margin-left: 1rem;
    }
`

const Button = styled.button`
    margin: 0 7rem;
`

const Errors = styled.div`
    color: red;
    font-size: 1.5rem;
    font-weight: 800;
    margin-top: 1rem;
`


const SignUpForm = (props) => {

    const {change, values, submit, errors, disabled} = props;

    const onChange = e => {
        //* deconstruct for e.target
        const {name, value, type, checked} = e.target

        //*Check to see if type is checkbox is checked first if not use value
        const valueSet = type === 'checkbox' ? checked : value

        //* Calls InputChange from app.js to setFormValues
        change(name, valueSet)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        submit();
    }

    return (
        <>
        <form onSubmit={onSubmit}>
         <FormGroups>
            <label>First-Name
                <input name='first_name' value={values.first_name} onChange={onChange} type='text' placeholder="Enter your first name"/>
            </label>
            <label>Last-Name
                <input name='last_name' value={values.last_name} onChange={onChange} type='text' placeholder="Enter your last name"/>
            </label>
            <label>Username
              <input name='user_name' value={values.user_name} onChange={onChange} type='text' placeholder="Enter your username"/>
            </label>
            <label>Email
              <input name='email' value={values.email} onChange={onChange} type='text' placeholder="Enter your Email"/>
             </label>
            <label>Password
                <input name='password' value={values.password} onChange={onChange} type='text' placeholder="Enter your Password"/>
            </label>
            <label>Confirm Password
             <input name='confirm_password' value={values.confirm_password} onChange={onChange} type='text' placeholder="Confirm your Password"/>
        </label>
        <Terms>I agree with the Term, and Privacy Policy
             <input name='terms' value={values.terms} onChange={onChange} type='checkbox' />
        </Terms>
       <Button disabled={disabled}>Create your Account</Button>
        <Errors>
            <div>{errors.first_name}</div>
            <div>{errors.last_name}</div>
            <div>{errors.user_name}</div>
            <div>{errors.email}</div>
            <div>{errors.password}</div>
            <div>{errors.confirm_password}</div>
            <div>{errors.terms}</div>
        </Errors>
       </FormGroups>
     </form>
     </>
    );
};

export default SignUpForm;