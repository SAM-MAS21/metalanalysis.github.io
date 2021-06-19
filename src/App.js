import Menubar from "./components/pages/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Approval from "./components/pages/Approvals";
import Client from "./components/pages/Clients";
import Contact from "./components/pages/Contact";
import Faq from "./components/pages/Faq";
import Service from "./components/pages/Services";
import Footer from "./components/pages/Footer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Menubar/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/about-us" component={About} />
          <Route path="/services" exact component={Service} />
          {/* <Route path="/clients" exact component={Client} /> */}
          <Route path="/approvals" exact component={Approval} />
          {/* <Route path="/faqs" exact component={Faq} /> */}
          <Route path="/contact-us" exact component={Contact} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
