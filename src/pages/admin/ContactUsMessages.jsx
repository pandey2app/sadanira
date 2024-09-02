import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteContactUsStart, getContactUsStart } from '../../redux/actions/contactUs.action'

const ContactUsMessages = () => {
    const forms = useSelector(state=>state.contactUs.contactUs)
    const dispatch = useDispatch()
    const getData = useCallback(()=>{
        dispatch(getContactUsStart())
    },[dispatch]) 

    const deleteData = useCallback((id)=>{
        if (id) {
            console.log(id) 
            dispatch(deleteContactUsStart(id))           
        }
    },[dispatch])

    useEffect(()=>{
        getData()
    },[getData])

    return (
        <>
            <div className="container-fluid " style={{ minHeight: "270px" }}>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Sr</th>
                            <th scope="col">Name</th>
                            <th scope="col">Mobile</th>
                            <th scope="col">Email</th>
                            <th scope="col">Subject</th>
                            <th scope="col">Message</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                           forms && forms.length > 0 ? forms.slice().reverse().map((form, index)=>(
                                <tr key={index}>
                                    <th scope="row">{index+1}</th>
                                    <td>{form.name}</td>
                                    <td>{form.mobile}</td>
                                    <td>{form.email}</td>
                                    <td>{form.subject}</td>
                                    <td>{form.message}</td>
                                    <td><button className='btn btn-danger btn-sm' onClick={()=>deleteData(form._id)}>Delete</button></td>
                                </tr>
                            )) : 
                            <tr>
                                <td colSpan='7' className='text-center'>No data found</td>
                            </tr>
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ContactUsMessages