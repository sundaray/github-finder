import React from "react";
import { useFetchUsers } from "../customHooks/dataFetch";

const UserList = () => {
  const { data: users, error, isError, isLoading } = useFetchUsers();

  return (
    <div>
      {isLoading ? (
        <p>Loading....</p>
      ) : isError ? (
        <p>{error.message}</p>
      ) : (
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
          {users.map((user) => (
            <li key={user.id}>{user.login}</li>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserList;
