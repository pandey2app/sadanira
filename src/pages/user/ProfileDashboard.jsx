import React from 'react';
import useGetUser from '../../hooks/useGetUser';

const ProfileDashboard = () => {
  const user = useGetUser()

  if (!user){
    return (
      <div className='p-4' style={{minHeight : '270px'}}>
        <h4 className='container-fluid text-center text-danger'>error fetching user's data</h4>
      </div>
    )
  }
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <nav className="bg-dark text-white p-3 visually-hidden" style={{ width: '250px', height: '100vh' }}>
        <h4 className="text-center mb-4">Dashboard</h4>
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link text-white" href="#profile">Profile</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#stats">Stats</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#activity">Activity</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#settings">Settings</a>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <main className="flex-fill p-4">
        <div className="container-fluid">
          <div className="row">
            {/* Profile Info */}
            <div className="col-md-4 mb-4">
              <div className="card p-3 text-center">
                <img
                  src={user.image}  // Replace with actual path or URL
                  alt="Profile"
                  className="img-fluid rounded-circle mx-auto mb-3"
                  style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                />
                <h2>{user.name}</h2>
                <p className="text-muted">{user.email}</p>
                <p>{user.userCategory}</p>
              </div>
            </div>

            {/* Dashboard Sections */}
            <div className="col-md-8" style={{ minHeight: "400px" }}>
              <div className="row">
                {/* User Stats */}
                <div className="col-lg-6 mb-4">
                  <div className="card p-3">
                    <h5>User Stats</h5>
                    <p>Number of posts: 120</p>
                    <p>Followers: 1,500</p>
                    <p>Following: 300</p>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="col-lg-6 mb-4" style={{ minHeight: "400px" }}>
                  <div className="card p-3">
                    <h5>Recent Activity</h5>
                    <ul className="list-unstyled">
                      <li>Logged in on September 2, 2024</li>
                      <li>Commented on a post on September 1, 2024</li>
                      <li>Updated profile picture on August 30, 2024</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfileDashboard;
