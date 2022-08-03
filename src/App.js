import React from "react";
import { Routes, Route } from "react-router-dom";
import { useFetchUsers } from "./components/customHooks/dataFetch";

const App = () => {
  const [data: users, error, isError, isLoading] = useFetchUsers();
  return <div>Hello World!</div>;
};

export default App;
