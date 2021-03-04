import * as yup from 'yup'

const formSchema = yup.object().shape({
    userName: yup.string()
        .trim()
        .required('username is required, please fill out.')
        .min(3, 'username must be 3 characters long'),
    password: yup.string()
        .trim()
        .required('password is required, please fill out.')
        .min(3, 'password must be 3 characters long'),
})

export default formSchema