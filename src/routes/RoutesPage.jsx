import React from "react";
import { Route, Routes } from "react-router-dom";
import RegistrationForm from "../pages/RegistrationForm";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import Programs from "../pages/Programs";
import CoursesPage from "../pages/CoursesPage";
import Admission from "../pages/Admission";
import AdmissionForm from "../pages/AdmissionForm";
import Support from "../pages/Support";
import ScrollToTop from "../pages/ScrollToTop";

const RoutesPage = () => {
  return (
    <>
    <ScrollToTop/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="courses" element={<CoursesPage />} />
        <Route path="programs" element={<Programs />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/admissionform" element={<AdmissionForm />} />
        <Route path="/support" element={<Support />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default RoutesPage;
