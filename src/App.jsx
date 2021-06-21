import { GlobalStyle } from "./globalStyle";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Index } from "./pages/Index/Index";
import { Contact } from "./pages/Contact/Contact";
import { Team } from "./pages/Team/Team";
import { Drinks } from "./pages/Drinks/Drinks";
import { About } from "./pages/About/About";

export function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Route path="/" exact component={Index} />
      <Route path="/contact" exact component={Contact} />
      <Route path="/team" exact component={Team} />
      <Route path="/about" exact component={About} />
      <Route path="/drinks" exact component={Drinks} />
    </Router>
  );
}
