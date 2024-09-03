import * as yup from 'yup';

export const loginValidationSchema = yup.object({
    email: yup
        .string()
        .required('Email is required')
        .matches(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|org|net)$/,
            'Email must be a valid address'
        ),
    password: yup
        .string()
        .required('Password is required'),
    rememberMe: yup.boolean()
});