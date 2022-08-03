import React from "react";
import { Routes, Route } from "react-router-dom";
import { useFetchUsers } from "./components/customHooks/dataFetch";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";

const App = () => {
  // const [data: users, error, isError, isLoading] = useFetchUsers();
  return (
    <div className="flex flex-col justify-between h-screen">
      <Navbar />
      <main className="container mx-auto px-3 pb-12">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/notfound" element={<NotFound />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
