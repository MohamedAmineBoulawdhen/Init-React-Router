import React from "react";
import MovieDescription from "./components/MovieDescription";
import { Routes, Route } from "react-router-dom";
import App1 from "./components/app1";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<App1 />} />
        <Route path="/movie/:title" element={<MovieDescription />} />
      </Routes>
    </>
  );
}

export default App;
