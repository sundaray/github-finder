import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const UserItem = ({ user: { login, avatar_url } }) => {
  return (
    <div className="shadow-sm">
      <img src={avatar_url} alt="profile" />
      {login}
      <Link to={`/users/${login}`}>Visit Profile</Link>
    </div>
  );
};

export default UserItem;

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};
