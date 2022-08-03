import React, { useState } from "react";
import UserList from "../screens/UserList";
import UserSearch from "../screens/UserSearch";
import { useFetchUsers } from "../customHooks/dataFetch";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [result, setResult] = useState(null);

  const apiResponse = useFetchUsers();

  const handleFetchUsers = () => {
    setResult(apiResponse);
  };

  return (
    <>
      <UserSearch
        searchState={searchQuery}
        searchStateSetter={setSearchQuery}
        fetchUsers={handleFetchUsers}
      />
      {result && <UserList usersData={result} />}
    </>
  );
};

export default Home;
