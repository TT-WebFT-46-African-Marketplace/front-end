import './ItemForm.css'
import React, {useState, useEffect} from 'react'
import Form from './Form'
import axios from "axios";
import formSchema from './formSchema'
import * as yup from 'yup'

const initialFormValues = {
    ///// DROP DOWN /////
    location:'',
    ///// TEXT INPUTS /////
    itemName:'',
    description:'',
    price:'',
    }
    const initialFormErrors = {
      ///// TEXT INPUT ERRORS /////
      ///// DROP DOWN /////
    location:'',
    ///// TEXT INPUTS /////
    itemName:'',
    description:'',
    price:'',
    }

    const initialItemForm = []
    const initialDisabled = true

function ItemForm() {
    const [formValues, setFormValues] = useState(initialFormValues) // object
    const [formErrors, setFormErrors] = useState(initialFormErrors) // object
    const [disabled, setDisabled] = useState(initialDisabled)
    const [itemForm, setItemForm] = useState(initialItemForm)

    const postNewItemForm = newItemForm => {
        axios.post(newItemForm)
        .then(res => {
            setItemForm([res.data, ...itemForm])
        })
        .catch(err => {
            console.log(err);
        })
        setFormValues(initialFormValues)
    }
    //////////////// EVENT HANDLERS ////////////////
    const inputChange = (name,value) => {
        yup.reach(formSchema,name)
        .validate(value)
        .then(() => {
            setFormErrors({...formErrors,[name]:''})
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
        const newItemForm = {
            itemName: formValues.itemName.trim(),
            description: formValues.description.trim(),
            price: formValues.price.trim(),
        }
        postNewItemForm(newItemForm)
    }

    useEffect(() => {
        formSchema.isValid(formValues).then(valid => setDisabled(!valid))
      }, [formValues])

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

export default ItemForm;