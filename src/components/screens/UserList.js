import React from "react";
import Spinner from "../assets/Spinner";
import { useFetchUsers } from "../customHooks/dataFetch";
import UserItem from "./UserItem";

const UserList = () => {
  const { data: users, error, isError, isLoading } = useFetchUsers();

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
