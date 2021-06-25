import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Project from "./components/Project";
import ContactMe from "./components/ContactMe";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import Form from "./components/Form";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Navbar />
          <AboutMe />
          <Footer />
        </Route>
        <Route exact path="/Project">
          <Navbar />
          <Project />
        </Route>
        <Route exact path="/ContactMe">
          <Navbar />
          <ContactMe />
          <Form />
        </Route>
        <Route exact path="/Resume">
          <Navbar />
          <Resume />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
