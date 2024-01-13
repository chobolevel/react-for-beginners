import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Header from "./components/partials/Header";
import Footer from "./components/partials/Footer";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/movie/:id(\d+)" component={Detail} />
          <Route path="/" component={Home} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
