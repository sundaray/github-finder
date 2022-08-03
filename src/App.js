import React from "react";
import { Routes, Route } from "react-router-dom";
import { useFetchUsers } from "./components/customHooks/dataFetch";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

const App = () => {
  // const [data: users, error, isError, isLoading] = useFetchUsers();
  return (
    <div className="flex flex-col justify-between h-screen">
      <Navbar />
      <main className="container mx-auto px-3 pb-12">Content</main>
      <Footer />
    </div>
  );
};

export default App;
