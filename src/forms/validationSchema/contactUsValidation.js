import * as yup from "yup";
export const contactUsValidation = yup.object({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    mobile: yup.string().max(10).min(10),
    message: yup.string().required("Message is required"),
    subject: yup.string().required("Subject is required"),
})
