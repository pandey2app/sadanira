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
            'Email must be a valid address and should belong to .com, .org, or .net domains'
        )
        .email('Please use a valid email address'),
    mobile: yup
        .mobile('Please use a valid mobile number'),
    password: yup
        .string()
        .required('Password must be provided')
        .min(6, 'Password must be at least 6 characters long'),
    image: yup
        .string()
        .default('image'),
    birthDate: yup
        .date()
        .required('Please select your birth date')
        .max(tenYearsAgo, 'You must be at least 10 years old')
        .typeError('Please enter a valid date'),
    country: yup
        .string()
        .required('Country must be provided'),
    state: yup
        .string()
        .required('State must be provided'),
    district: yup
        .string()
        .required('City must be provided'),
    role: yup
        .string()
        .oneOf(['member', 'admin'], 'Role must be either member or admin')
        .default('member'),
    userCategory: yup
        .string()
        .oneOf(['user', 'writer', 'poet', 'actor', 'singer'], 'The category should be only user, writer, poet, actor, singer')
        .default('user'),
    art: yup.string().default('reader'),
    isActive: yup.boolean().default(true),
    createdAt: yup.date().default(() => new Date().toLocaleString()),
    updatedAt: yup.date()
});

export default userValidationSchema;
