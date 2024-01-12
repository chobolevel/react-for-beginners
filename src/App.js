import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Header from "./components/partials/Header";
import Footer from "./components/partials/Footer";

function App() {
  return (
    <>
      <Header />
      <section>
        <Router>
          <Switch>
            <Route path="/movie/:id">
              <Detail />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </section>
      <Footer />
    </>
  );
}

export default App;
