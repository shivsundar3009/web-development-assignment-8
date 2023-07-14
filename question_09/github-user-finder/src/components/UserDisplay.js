import React from "react";

const UserDisplay = ({ user }) => {
  if (!user) {
    return null;
  }

  return (
    <div className="userFinder">
      <img src={user.avatar_url} alt={user.login} height={'200px'}/>

      <div>

      <h2>{user.name}</h2>
      <p>Followers: {user.followers }</p>
      <p>Repositories: {user.public_repos}</p>
      <p>Location: {user.location}</p>
      </div>
    </div>
  );
};

export default UserDisplay;