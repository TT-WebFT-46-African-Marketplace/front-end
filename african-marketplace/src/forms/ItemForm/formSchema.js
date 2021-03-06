import * as yup from "yup";

const formSchema = yup.object().shape({
  location: yup
    .string()
    .oneOf(
      ["Algeria", "Angola", "Benin", "Botswana", "Burkina", "Faso"],
      "Location is required"
    ),
  name: yup
    .string()
    .trim()
    .required("item name is required, please fill out")
    .min(3, "item name must be 3 characters long"),
  description: yup
    .string()
    .trim()
    .required("description is required, please fill out")
    .min(3, "description must be 3 characters long"),
  itemcost: yup
    .number()
    .typeError("you must specify a number")
    .required("This field is required")
    .min(2),
});

export default formSchema;
