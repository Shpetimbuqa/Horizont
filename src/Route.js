import React from "react";
import { Router, Routes } from "react-router-dom";
import Header from '../src/components/Header';

export default function Route(props) {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/menu" element={<Menu />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
        </Routes>
      </Router>
    </div>
  );
}
