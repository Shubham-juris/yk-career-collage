import React from "react";
import Navbar from "./common/Navbar";
import RoutesPage from "./routes/RoutesPage";
import Footer from "./common/Footer";
import AdmissionChat from "./components/ui/AdmissionChat";
import FloatingChat from "./components/ui/FloatingChat";

const App = () => {
  return (
    <>
      <Navbar />
      <RoutesPage />
      <Footer />
      <AdmissionChat />
      <FloatingChat/>
    </>
  );
};

export default App;
