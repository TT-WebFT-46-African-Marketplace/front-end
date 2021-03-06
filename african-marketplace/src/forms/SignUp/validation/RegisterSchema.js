import * as yup from "yup";

const registerSchema = yup.object().shape({
  // first_name: yup
  //   .string()
  //   .trim()
  //   .required("Name is required, please fill out.")
  //   .min(2, "Name must be 2 characters long"),

  // last_name: yup
  //   .string()
  //   .trim()
  //   .required("Name is required, please fill out.")
  //   .min(2, "Name must be 2 characters long"),

  username: yup
    .string()
    .trim()
    .required("Name is required, please fill out.")
    .min(5, "Name must be 5 characters long"),

  primaryemail: yup
    .string()
    .email("Must be a valid email address")
    .required("Email is required to proceed."),

  password: yup
    .string()
    .trim()
    .required("Password is required, please fill out.")
    .min(8, "Password must be 8 characters long"),

  // confirm_password: yup
  //   .string()
  //   .trim()
  //   .oneOf([yup.ref("password")], "Passwords must match"),

  // terms: yup
  //   .boolean()
  //   .required("Terms needs to be checked.")
  //   .oneOf([true], "The terms and conditions must be accepted."),
});

export default registerSchema;
