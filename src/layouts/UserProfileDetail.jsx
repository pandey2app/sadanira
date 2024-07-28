import React from 'react'

const UserProfileDetail = () => {
    return (
        <>
            <div class="box2 box">
                <div class="content">
                    <div class="row">
                        <div class="image">
                            <img src="https://i.postimg.cc/bryMmCQB/profile-image.jpg" alt="Profile Image"/>
                        </div>
                        <div class="post">
                            <p>Post</p>
                            <h5>28</h5>
                        </div>
                        <div class="followers">
                            <p>Followers</p>
                            <h5>678</h5>
                        </div>
                        <div class="following">
                            <p>Following</p>
                            <h5>120</h5>
                        </div>
                    </div>
                    <div class="text">
                        <p class="name">Ethan Rivers</p>
                        <p class="job_title">UI / UX Designer</p>
                        <p class="about">About</p>
                        <p class="job_discription">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores, placeat obcaecati. Eaque fugit eveniet error voluptates totam enim molestias vitae, amet aliquid deleniti ipsa ea.</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default UserProfileDetail