import * as yup from "yup"
export const createPostValidationSchema = yup.object({
    title: yup.string()
        .required('Title is required')
        .min(5, 'Title must be at least 5 characters')
        .max(100, 'Title cannot exceed 100 characters'),

    content: yup.string()
        .required('Content is required')
        .min(20, 'Content must be at least 20 characters'),

    tags: yup
        .array()
        .of(yup.string().required('Each tag must be a string'))
        .max(5, 'You can add up to 5 tags'),

    image: yup
        .mixed()
        .test('fileFormat', 'Unsupported format, only .jpg and .png allowed', value => value && ['image/jpeg', 'image/png'].includes(value.type))
})