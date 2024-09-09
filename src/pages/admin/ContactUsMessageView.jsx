import React, { useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

const ContactUsMessageView = () => {
    const [message, setMessage] = useState(null);
    const { id } = useParams()
    const messages = useSelector(state => state.contactUs.contactUs)

    const findMessage = useCallback(() => {
        const foundMessage = messages.find(msg => msg._id === id);
        setMessage(foundMessage);
    }, [id, messages]);

    useEffect(() => {
        findMessage();
    }, [findMessage, id, message]);
    if (!message) return <h1>Loading...</h1>
    return (
        <div className='conatiner-fluid p-3'>
            <div className='row justify-content-center gap-5 align-content-center'>
                <h2 className='text-center ps-5 text-danger col-9'>Contact Us Message by <span className='text-primary text-capitalize'>{message.name}</span></h2>
                <Link to='/admin/contact-us-messages' className='btn btn-primary col-1 fs-5 btn-link text-danger py-2'>Back</Link>
            </div>
            <div className='d-flex mt-3 justify-content-center gap-4'>
                <h4><span className='text-danger'> Email : </span>{message.email}</h4>
                <h4 className=''><span className='text-danger'>Recieved At : </span>{message.createdAt.toLocaleString()}</h4>
            </div>
            <p className='text-center text-info w-75 m-auto mt-2 fs-3 fw-bold text-capitalize'><span className='text-danger'>Subject : </span>{message.subject}</p>
            <p className='text-dark border border-warning p-2 text-capitalize fs-4 mx-4'>{message.message}</p>
        </div>
    )
}

export default ContactUsMessageView