import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "components/Navbar";
import Home from "pages/Home";
import Search from "pages/Search";
import Notfound from "pages/Notfound";
import Error from "pages/Error";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="search" component={Search} />
          <Route exact path="error" component={Error} />
          <Route component={Notfound} />
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
