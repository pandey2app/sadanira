import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormData } from '../hooks/useFormData';
import { createPostInitial } from '../forms/initialStates/createPostInitial';
import { createPostValidationSchema } from '../forms/validationSchema/createPostValidationSchema';
import { useDispatch } from 'react-redux';
import { addPostStart } from '../redux/actions/post.action';
import axios from 'axios';
import useAxiosHeader from '../hooks/useAxiosHeader';

const CreatePost = () => {
    const [formData, setFormData, inputChange] = useFormData(createPostInitial)
    const [errors, setErrors] = useState({});
    const [showOtherInputs, setShowOtherInputs] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [multipartWithProgress, progress, setProgress] = useAxiosHeader()
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const showInputFields = (e) => {
        if (e.target.value.length > 5) {
            setShowOtherInputs(true);
        } else {
            setShowOtherInputs(false);
        }
    }
    const handleImageChange = (e) => {
        if (e.target.name === 'image') {

            setFormData({
                ...formData,
                image: e.target.files[0],
            });
        }
    };

    const handleTagsChange = (e) => {
        if (e.target.name === 'tags') {
            setFormData({
                ...formData,
                tags: e.target.value.split(' ').map((tag) => tag.trim()),
            });
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await createPostValidationSchema.validate(formData, { abortEarly: false })

            let imageUrl = null;
            if (formData.image.name) {
                const response = await axios.post(`${process.env.REACT_APP_BACKEND_ROOT_ADDRESS}/api/file/upload`, formData, multipartWithProgress)
                imageUrl = response.data.url;
            }
            if (!imageUrl) {
                console.log("Error uploading image ");

                return null;
            }
            
            console.dir({...formData, image: imageUrl});
            dispatch(addPostStart({...formData, image: imageUrl}))

            setErrors({})
            setFormData(createPostInitial)
            setSuccessMessage('Post created successfully!')
            setTimeout(()=>{
                setProgress(null)
                setShowOtherInputs(false)
                setSuccessMessage('')
                navigate('/')   
            }, 1000)
        } catch (error) {
            const newErrors = {}
            if (error.inner) {
                error.inner.forEach(err => {
                    if (!newErrors[err.path]) {
                        newErrors[err.path] = err.message
                    }
                });
            }
            setErrors(newErrors)
        }
    };

    return (
        <div className="container py-2">
            {successMessage && <p className="text-success">{successMessage}</p>}
            <form onSubmit={handleSubmit} className=''>
                <div className='d-flex w-100 gap-4'>
                    {!successMessage && <h2 className='w-25'>Create Post</h2>}
                    <div className="mb-3 w-100">
                        <input
                            type="text"
                            name="title"
                            className="form-control"
                            placeholder="Enter post title"
                            value={formData.title}
                            onChange={inputChange}
                            onInput={showInputFields}
                        />
                        {errors.title && <p className="text-danger">{errors.title}</p>}
                    </div>

                    <div className="mb-3 w-100">
                        <input
                            type="text"
                            name="tags"
                            className="form-control"
                            placeholder="Enter tags like: #poem #short_story"
                            value={formData.tags}
                            onChange={inputChange}
                            onBlur={handleTagsChange}
                            style={{ color: 'blue' }}
                        />
                        {errors.tags && <p className="text-danger">{errors.tags}</p>}
                    </div>
                </div>


                <div className={`mb-3 ${showOtherInputs ? '' : "visually-hidden"}`}>

                    <textarea
                        name="content"
                        className="form-control"
                        rows="3"
                        placeholder="Write your post content here"
                        value={formData.content}
                        onChange={inputChange}
                    />
                    {errors.content && <p className="text-danger">{errors.content}</p>}
                </div>

                {/* {formData.image && <div className='w-100'>
                    <img src={formData.image.name} alt="Preview post" className='mx-auto' height="200px" />
                </div>} */}

                <div className={`d-flex gap-5 ${showOtherInputs ? '' : "visually-hidden"}`}>
                    <div className="mb-3 w-75">

                        {!progress && <input type="file" name="image" className="form-control " onChange={handleImageChange} />}
                        {progress && <p className='text-success'>Image uploading progress : {progress}%</p>}
                        {errors.image && <p className="text-danger">{errors.image}</p>}
                    </div>

                    <div className='w-25'>
                        <button type="submit" className="btn btn-primary w-100">
                            Post
                        </button>
                        {errors.apiError && <p className="text-danger mt-2">{errors.apiError}</p>}
                    </div>
                </div>
            </form>
        </div>
    );
};

export default CreatePost;
