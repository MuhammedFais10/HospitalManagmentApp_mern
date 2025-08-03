import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home.jsx";
import Doctors from "../Pages/Doctors/Doctors.jsx";
import DoctorDetails from "../Pages/Doctors/DoctorDetails.jsx";
import Login from "../Pages/Login.jsx";
import SignUp from "../Pages/SignUp.jsx";
import Contact from "../Pages/Contact.jsx";
import Service from "../Pages/Service.jsx";

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/doctors/:id" element={<DoctorDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Service />} />
    </Routes>
  );
}

export default Routers;
