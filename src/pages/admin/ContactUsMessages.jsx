import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getContactUsStart } from '../../redux/actions/contactUs.action'

const ContactUsMessages = () => {
    const forms = useSelector(state=>state.contactUs.contactUs[0])
    const dispatch = useDispatch()
    const getData = useCallback(()=>{
        dispatch(getContactUsStart())
    },[dispatch]) 

    useEffect(()=>{
        getData()
    },[getData])

    return (
        <>
            <div className="container-fluid">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">name</th>
                            <th scope="col">mobile</th>
                            <th scope="col">Email</th>
                            <th scope="col">subject</th>
                            <th scope="col">message</th>
                            <th scope="col">delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                           forms && forms.length > 0 ? forms.map((form, index)=>(
                                <tr key={index}>
                                    <th scope="row">{index+1}</th>
                                    <td>{form.name}</td>
                                    <td>{form.mobile}</td>
                                    <td>{form.email}</td>
                                    <td>{form.subject}</td>
                                    <td>{form.message}</td>
                                    <td><button className='btn btn-danger btn-sm'>Delete</button></td>
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