import * as yup from 'yup';

const tenYearsAgo = new Date();
tenYearsAgo.setFullYear(tenYearsAgo.getFullYear() - 10);

const userValidationSchema = yup.object({
    name: yup
        .string()
        .required('Name must be provided')
        .min(3, 'Name must be at least 3 characters long')
        .max(50, 'Name must not exceed 50 characters'),
    email: yup
        .string()
        .required('Email must be provided')
        .matches(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|org|net)$/,
            'Email must be a valid address'
        )
        .email('Please use a valid email address'),
    mobile: yup
        .string()
        .required('Mobile number is required')
        .matches(/^[6-9]\d{9}$/, 'Please use a valid mobile number'),
    password: yup
        .string()
        .required('Password must be provided')
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            'Password must contain at least 8 characters, including uppercase, lowercase, digits, and special characters'
        ),
    image: yup
        .string()
        .default('image'),
    birthDate: yup
        .date()
        .required('Please select your birth date')
        .max(tenYearsAgo, 'You must be at least 10 years old')
        .typeError('Please enter a valid date'),
    gender: yup
        .string()
        .required('Gender must be provided')
        .oneOf(['male', 'female'], 'gender must be either male, female or other'),
    state: yup
        .string()
        .required('State must be provided'),
    district: yup
        .string()
        .required('District must be provided'),
    role: yup
        .string()
        .oneOf(['member', 'admin'], 'Role must be either member or admin')
        .default('member'),
    userCategory: yup
        .string()
        .default('reader')
        .oneOf(['reader', 'writer', 'poet', 'actor','singer'], 'The category should be only reader, writer, poet, actor, singer'),
    art: yup
        .lazy((value, context) => {
            if (context.parent.userCategory !== 'reader' && context.parent.userCategory) {
                return yup.string().required('Art must be provided when user category is not reader');
            }else
            return yup.string().default('reader');
        }),
    objective: yup.string().default('joined to empower society!'),
    isActive: yup.boolean().default(true),
    createdAt: yup.date().default(() => new Date().toLocaleString()),
    updatedAt: yup.date().default(() => new Date().toLocaleString()),
});

export default userValidationSchema;
