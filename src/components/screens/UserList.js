import React from "react";
import Spinner from "../assets/Spinner";
import UserItem from "./UserItem";

const UserList = ({ usersData }) => {
  const { data: users, error, isError, isLoading } = usersData;
  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : isError ? (
        <p>{error.message}</p>
      ) : (
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
          {users.map((user) => (
            <UserItem key={user.id} user={user} />
          ))}
        </div>
      )}
    </div>
  );
};

export default UserList;
