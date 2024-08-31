import React from 'react'

const UserProfileDetail = () => {
    return (
        <>
            <div className="box2 box">
                <div className="content">
                    <div className="row">
                        <div className="image">
                            <img src="https://i.postimg.cc/bryMmCQB/profile-image.jpg" alt="Profile Image"/>
                        </div>
                        <div className="post">
                            <p>Post</p>
                            <h5>28</h5>
                        </div>
                        <div className="followers">
                            <p>Followers</p>
                            <h5>678</h5>
                        </div>
                        <div className="following">
                            <p>Following</p>
                            <h5>120</h5>
                        </div>
                    </div>
                    <div className="text">
                        <p className="name">Ethan Rivers</p>
                        <p className="job_title">UI / UX Designer</p>
                        <p className="about">About</p>
                        <p className="job_discription">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores, placeat obcaecati. Eaque fugit eveniet error voluptates totam enim molestias vitae, amet aliquid deleniti ipsa ea.</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default UserProfileDetail