import React from "react";
import { Route, Routes } from "react-router-dom";
import GlobalNavbar from "./components/GlobalNavbar";
import Index from "./components/Index";
import NotFound from "./components/NotFound";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <>
      <GlobalNavbar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
