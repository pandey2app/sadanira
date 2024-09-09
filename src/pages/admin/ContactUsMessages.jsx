import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteContactUsStart, getContactUsStart } from '../../redux/actions/contactUs.action'
import { useNavigate } from 'react-router-dom'

const ContactUsMessages = () => {
    const forms = useSelector(state => state.contactUs.contactUs)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const getData = useCallback(() => {
        dispatch(getContactUsStart())
    }, [dispatch])

    const deleteData = useCallback((id, e) => {
        e.stopPropagation();
        if (id) {
            dispatch(deleteContactUsStart(id))
            navigate('/admin/contact-us-messages')
        }
    }, [dispatch, navigate])

    const handleClick = (id) => {
        navigate(`/admin/contact-us-messages/${id}`)
    }

    useEffect(() => {
        getData()
    }, [getData])

    return (
        <>
            <div className="container-fluid " style={{ minHeight: "270px" }}>
                <div className="table-responsive">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col" style={{ width: '5%' }}>Sr</th>
                                <th scope="col" style={{ width: '15%' }}>Name</th>
                                <th scope="col" style={{ width: '15%' }}>Mobile</th>
                                <th scope="col" style={{ width: '20%' }}>Email</th>
                                <th scope="col" style={{ width: '20%' }}>Subject</th>
                                <th scope="col" style={{ width: '20%' }}>Date / Time</th>
                                <th scope="col" style={{ width: '5%' }}>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {forms && forms.length > 0 ? (
                                forms.slice().reverse().map((form, index) => (
                                    <tr key={index} onClick={() => handleClick(form._id)} style={{ cursor: 'pointer' }}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{form.name}</td>
                                        <td>{form.mobile}</td>
                                        <td>{form.email}</td>
                                        <td>{form.subject}</td>
                                        <td>{new Date(form.createdAt).toLocaleString()}</td>
                                        <td>
                                            <button className="btn btn-danger btn-sm" onClick={(e) => deleteData(form._id, e)}>Delete</button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="7" className="text-center">No data found</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

            </div>
        </>
    )
}

export default ContactUsMessages