import React, { useState, useEffect } from 'react';
import SignUpForm from './SignUpForm'
import styled from 'styled-components';

const FormContainer = styled.div`
    text-align: center;
    border:1px solid blue;
    background-color: blue;
    height: 800px;
    

    h1{
        font-size: 4rem;
    }
`



const SignUp = () => {

    const initialFormValues = {
        first_Name: '',
        last_Name: '',
        user_Name: '',
        password: '',
        confirm_Password: '',
        terms: false
    }

    const users = []

    const {newUser, setNewUser} = useState(users)

    const {formValues, setFormValues} = useState(initialFormValues)

    const change = (name, value) => {
        setFormValues({...formValues, [name]:value
        })
    }

    return (
        <FormContainer className="form-container">
     <h1>Sign-Up Form</h1>
     <SignUpForm values={formValues} change={change}/>
   </FormContainer>
    );
};

export default SignUp;