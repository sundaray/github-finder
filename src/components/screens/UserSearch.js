import React from "react";

const UserSearch = ({ searchState, searchStateSetter, fetchUsers }) => {
  return (
    <>
      <form>
        <input
          className="shadow appearance-none border rounded w-50% py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Username"
          value={searchState}
          onChange={(e) => searchStateSetter(e.target.value)}
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Find User
        </button>
      </form>
      <button
        onClick={fetchUsers}
        type="submit"
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      >
        Fetch Search
      </button>
    </>
  );
};

export default UserSearch;
