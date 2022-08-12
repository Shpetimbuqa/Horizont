import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "reactstrap";

import Header from "./components/Header";
import LoginView from "./LoginView";
import About from "./components/About";
import Menu from "./components/Menu";

export default function App() {
  return (
    <Container className="app">
      <Routes>
        <Route exact path="/" element={<Header />}></Route>
        <Route exact path="/menu" element={<Menu />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/login" element={<LoginView />}></Route>
      </Routes>
    </Container>
  );
}