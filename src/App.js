import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Header from "./components/partials/Header";
import Footer from "./components/partials/Footer";
import "./styles/init.css";
import "./styles/styles.css";
import { useState, useEffect } from "react";

function App() {
  const [isTop, setIsTop] = useState(true);
  const handleScroll = (e) => {
    if (window.scrollY > 0) {
      setIsTop(false);
    } else {
      setIsTop(true);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <Header isTop={isTop} />
      <Routes>
        <Route path="/movie/:id" element={<Detail />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <div id="preview-modal-wrapper"></div>
      <Footer />
    </>
  );
}

export default App;
