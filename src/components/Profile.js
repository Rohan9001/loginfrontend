import React from 'react';
import './Profile.css';

const Profile = () => {
    const user=JSON.parse(localStorage.getItem('user'));
  return (
    <div className='center'>
    <div className="name-card">
      <div className="name-container">
        <div className="greeting"><h3>Hello<br></br>{user.firstName} {user.lastName}!</h3></div>
      </div>
    </div>
    </div>
  );
};

export default Profile;
