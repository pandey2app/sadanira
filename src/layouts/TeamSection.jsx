import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsersStart } from '../redux/actions/users.action'

const TeamSection = () => {
    const dispatch = useDispatch()
    const members = useSelector(state => state.users.users)
    const [filteredMembers, setFilteredMembers] = useState({
        membersOfBihar: [],
        membersOfUP: [],
        membersOfJharkhand: [],
        membersOfChhattisgarh: [],
        membersOfOtherStates: []
    })

    const [loading, setLoading] = useState(true)

    const getMembers = useCallback(() => {
        dispatch(getUsersStart())
    }, [dispatch])

    const filterMembers = useCallback(() => {
        const membersOfBihar = members.filter(member => member.state.toLowerCase() === "bihar")
        const membersOfUP = members.filter(member => member.state.toLowerCase() === "uttar pradesh")
        const membersOfJharkhand = members.filter(member => member.state.toLowerCase() === "jharkhand")
        const membersOfChhattisgarh = members.filter(member => member.state.toLowerCase() === "chhattisgarh")
        const membersOfOtherStates = members.filter(member => !["bihar", "uttar pradesh", "jharkhand", "chhattisgarh"].includes(member.state.toLowerCase()))

        setFilteredMembers({ membersOfBihar, membersOfUP, membersOfJharkhand, membersOfChhattisgarh, membersOfOtherStates })
    }, [members])

    useEffect(() => {
        getMembers()
    }, [getMembers])

    useEffect(() => {
        filterMembers()
    }, [members, filterMembers])

    useEffect(() => {
        setTimeout(() => {
            if (filteredMembers.membersOfBihar.length > 0) {
                setLoading(false)
            }
        }, 2000)
    }, [filteredMembers])

    if (loading) return <h3 className='text-center text-danger mb-3'>Members Loading...</h3>
    return (
        <div className="container-fluid menu bg-light py-6 my-6">
            <div className="container">
                <div className="text-center wow bounceInUp" data-wow-delay="0.1s">
                    <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">Volunteers</small>
                    <h1 className="display-5 mb-5">Our Members Across India</h1>
                </div>
                <div className="tab-className text-center">
                    <ul className="nav nav-pills d-inline-flex justify-content-center mb-5 wow bounceInUp" data-wow-delay="0.1s">
                        <li className="nav-item p-2">
                            <a className="d-flex py-2 mx-2 border border-primary bg-white rounded-pill active" data-bs-toggle="pill" href="#tab-6">
                                <span className="text-dark" style={{ width: "150px" }}>Bihar</span>
                            </a>
                        </li>
                        <li className="nav-item p-2">
                            <a className="d-flex py-2 mx-2 border border-primary bg-white rounded-pill" data-bs-toggle="pill" href="#tab-7">
                                <span className="text-dark" style={{ width: "150px" }}>Uttar Pradesh</span>
                            </a>
                        </li>
                        <li className="nav-item p-2">
                            <a className="d-flex py-2 mx-2 border border-primary bg-white rounded-pill" data-bs-toggle="pill" href="#tab-8">
                                <span className="text-dark" style={{ width: "150px" }}>Jharkhand</span>
                            </a>
                        </li>
                        <li className="nav-item p-2">
                            <a className="d-flex py-2 mx-2 border border-primary bg-white rounded-pill" data-bs-toggle="pill" href="#tab-9">
                                <span className="text-dark" style={{ width: "150px" }}>Chhattisgarh</span>
                            </a>
                        </li>
                        <li className="nav-item p-2">
                            <a className="d-flex py-2 mx-2 border border-primary bg-white rounded-pill" data-bs-toggle="pill" href="#tab-10">
                                <span className="text-dark" style={{ width: "150px" }}>Other States</span>
                            </a>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div id="tab-6" className="tab-pane fade show p-0 active">
                            <div className="row g-4">
                                {
                                    filteredMembers.membersOfBihar.length > 0 ?
                                        filteredMembers.membersOfBihar.map((member, index) => (
                                            <div className="col-lg-6 wow bounceInUp" data-wow-delay="0.1s" key={index}>
                                                <div className="menu-item d-flex align-items-center">
                                                    <img className="flex-shrink-0 img-fluid rounded-circle" width="80px" src={`${member.image}`} alt="" />
                                                    <div className="w-100 d-flex flex-column text-start ps-4">
                                                        <div className="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                                                            <h4>{member.name}</h4>
                                                            <h4 className="text-primary">{member.userCategory}</h4>
                                                        </div>
                                                        <p className="mb-0">{member.objective}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                        : <h3 className='text-danger'>Currently no member from Bihar</h3>
                                }
                            </div>
                        </div>
                        <div id="tab-7" className="tab-pane fade show p-0">
                            <div className="row g-4">
                                {
                                    filteredMembers.membersOfUP.length > 0 ?
                                        filteredMembers.membersOfUP.map((member, index) => (
                                            <div className="col-lg-6 wow bounceInUp" data-wow-delay="0.1s" key={index}>
                                                <div className="menu-item d-flex align-items-center">
                                                    <img className="flex-shrink-0 img-fluid rounded-circle" width="80px" src={`${member.image}`} alt="" />
                                                    <div className="w-100 d-flex flex-column text-start ps-4">
                                                        <div className="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                                                            <h4>{member.name}</h4>
                                                            <h4 className="text-primary">{member.userCategory}</h4>
                                                        </div>
                                                        <p className="mb-0">{member.objective}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                        : <h3 className='text-danger'>Currently no member from Uttar Pradesh</h3>
                                }
                            </div>
                        </div>
                        <div id="tab-8" className="tab-pane fade show p-0">
                            <div className="row g-4">
                            {
                                    filteredMembers.membersOfJharkhand.length > 0 ?
                                        filteredMembers.membersOfJharkhand.map((member, index) => (
                                            <div className="col-lg-6 wow bounceInUp" data-wow-delay="0.1s" key={index}>
                                                <div className="menu-item d-flex align-items-center">
                                                    <img className="flex-shrink-0 img-fluid rounded-circle" width="80px" src={`${member.image}`} alt="" />
                                                    <div className="w-100 d-flex flex-column text-start ps-4">
                                                        <div className="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                                                            <h4>{member.name}</h4>
                                                            <h4 className="text-primary">{member.userCategory}</h4>
                                                        </div>
                                                        <p className="mb-0">{member.objective}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                        : <h3 className='text-danger'>Currently no member from Jharkhand</h3>
                                }
                            </div>
                        </div>
                        <div id="tab-9" className="tab-pane fade show p-0">
                            <div className="row g-4">
                            {
                                    filteredMembers.membersOfChhattisgarh.length > 0 ?
                                        filteredMembers.membersOfChhattisgarh.map((member, index) => (
                                            <div className="col-lg-6 wow bounceInUp" data-wow-delay="0.1s" key={index}>
                                                <div className="menu-item d-flex align-items-center">
                                                    <img className="flex-shrink-0 img-fluid rounded-circle" width="80px" src={`${member.image}`} alt="" />
                                                    <div className="w-100 d-flex flex-column text-start ps-4">
                                                        <div className="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                                                            <h4>{member.name}</h4>
                                                            <h4 className="text-primary">{member.userCategory}</h4>
                                                        </div>
                                                        <p className="mb-0">{member.objective}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                        : <h3 className='text-danger'>Currently no member from Chhattisgarh</h3>
                                }
                            </div>
                        </div>
                        <div id="tab-10" className="tab-pane fade show p-0">
                            <div className="row g-4">
                            {
                                    filteredMembers.membersOfOtherStates.length > 0 ?
                                        filteredMembers.membersOfOtherStates.map((member, index) => (
                                            <div className="col-lg-6 wow bounceInUp" data-wow-delay="0.1s" key={index}>
                                                <div className="menu-item d-flex align-items-center">
                                                    <img className="flex-shrink-0 img-fluid rounded-circle" width="80px" src={`${member.image}`} alt="" />
                                                    <div className="w-100 d-flex flex-column text-start ps-4">
                                                        <div className="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                                                            <h4>{member.name}</h4>
                                                            <h4 className="text-primary">{member.userCategory}</h4>
                                                        </div>
                                                        <p className="mb-0">{member.objective}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                        : <h3 className='text-danger'>Currently no member from Other States</h3>
                                }
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamSection