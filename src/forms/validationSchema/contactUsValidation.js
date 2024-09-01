import * as yup from "yup";

export const contactUsValidation = yup.object({
    name: yup
        .string()
        .required("Name is required"),
    email: yup
        .string()
        .matches(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|org|net)$/,
            'Email must be a valid address'
        )
        .email("Invalid email")
        .required("Email is required"),
    mobile: yup
        .string()
        .required("Mobile is required")
        .matches(/^[6-9]\d{9}$/, 'Please use a valid mobile number')
        .max(10, "Max length is 10 digits")
        .min(10, "Min length is 10 digits"),
    message: yup
        .string()
        .required("Message should'nt be empty"),
    subject: yup.string()
})
