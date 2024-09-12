import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getPostByIdStart } from '../../redux/actions/post.action';

const PostView = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const postFromState = useSelector(state => state.post.currentPost)
    const apiError = useSelector(state => state.post.getPostByIdErrorMessage)
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    const getPost = useCallback(() => {
        dispatch(getPostByIdStart(id))


        setTimeout(() => {
            if (apiError || postFromState.title) {
                setLoading(false)
            }
        }, 300)
    }, [apiError, dispatch, id, postFromState.title])

    const getPostsByHashtag = (hashtag) => {
        navigate(`/posts/${'hashtag' + hashtag.slice(1)}`);
    }
    useEffect(() => {
        getPost()
    },[ getPost ])

    if (loading) {
        return <p className='text-center text-success'>Loading...</p>
    }

    if (!postFromState.title) {
        return <p className='text-center text-danger'>Error featching post</p>;
    }

    return (
        <div className="container mt-3">
            <div className="">
                <h2 className='text-center text-success'>{postFromState.title}</h2>
                {postFromState.tags.length && <div className='d-flex justify-content-center gap-5 my-2'>
                    {
                        postFromState.tags.map((tag, index) => (
                            <span key={index} onClick={() => getPostsByHashtag(tag)} className='mx-1' style={{ color: 'blue', cursor: 'pointer' }}>{tag}</span>
                        ))
                    }
                </div>}
                <div>
                    <img className='d-block mx-auto ' style={{ maxWidth: "300px" }} src={postFromState.image ?? `${process.env.REACT_APP_BACKEND_ROOT_ADDRESS}/img/default_post_image.jpg`} alt="" />
                </div>

                <p className='text-dark my-3 fs-5'>{postFromState.content}</p>

                <div className='d-flex justify-content-between px-4 bg-light py-2 mt-2'>
                    <p className='text-danger fw-medium fs-5'>Author: {postFromState.author.name}</p>
                    <p className='text-danger fw-medium fs-5'>Posted: {new Date(postFromState.createdAt).toLocaleString()}</p>
                    <p className='text-danger fw-medium fs-5'>Updated: {new Date(postFromState.updatedAt).toLocaleString()}</p>
                </div>
            </div>
        </div>
    );
};

export default PostView;
