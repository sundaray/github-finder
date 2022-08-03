import React from "react";
import { Routes, Route } from "react-router-dom";
import { useFetchUsers } from "./components/customHooks/dataFetch";
import Navbar from "./components/layout/Navbar";
const App = () => {
  // const [data: users, error, isError, isLoading] = useFetchUsers();
  return (
    <div className="flex flex-col justify-between h-screen">
      <Navbar />
      <main>Content</main>
    </div>
  );
};

export default App;
