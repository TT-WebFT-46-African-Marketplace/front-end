import React from 'react';
import styled from 'styled-components';

const FormGroups = styled.div`
    display: flex;
    flex-flow: row wrap;
    border:1px solid #fff;
    background-color: #fff;
    height: 100%;
    padding: 3rem;
    margin: 0 300px;

    label{
        display: flex;
        flex-flow: column;
        padding: 1rem;
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


const SignUpForm = (props) => {

    const {change, values} = props;

    const onChange = e =>{
        //* deconstruct for e.target
        const {name, values, type, checked} = e.target

        //*Check to see if type is checkbox is checked first if not use value
        const valueSet = type === 'checkbox' ? checked : values

        //* Calls InputChange from app.js to setFormValues
        change(name, valueSet)
    }

    return (
        <form>
         <FormGroups>
            <label>First-Name
                <input name='first_Name' value={values.first_Name} change={onChange} type='text' placeholder="Enter your first name"/>
            </label>
            <label>Last-Name
                <input name='last_Name' value={values.last_Name} change={onChange} type='text' placeholder="Enter your last name"/>
            </label>
            <label>Username
              <input name='user_Name' value={values.user_Name} change={onChange} type='text' placeholder="Enter your username name"/>
            </label>
            <label>Email
              <input name='email' value={values.email} change={onChange} type='text' placeholder="Enter your Email"/>
             </label>
            <label>Password
                <input name='password' value={values.password} change={onChange} type='text' placeholder="Enter your Password"/>
            </label>
            <label>Confirm Password
             <input name='confirm_Password' value={values.confirm_Password} change={onChange} type='text' placeholder="Confirm your Password"/>
        </label>
        <Terms>I agree with the Term, and Privacy Policy
             <input name='terms' value={values.terms} change={onChange} type='checkbox' />
        </Terms>
       <button disabled>Create your Account</button>
       </FormGroups>
     </form>
    );
};

export default SignUpForm;