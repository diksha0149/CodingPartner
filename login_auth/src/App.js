import { Switch, Route } from "react-router-dom"
import Signup from "./pages/signup/signup"
import Dashboard from "./pages/Dashboard/dashboard"
import Login from "./pages/login/login"


function App() {
  return (
    <div className="App">
        <Switch>
           <Route  exact path="/" component={Signup} />
           <Route path="/login" component={Login} />
           {/* <Route path="/signup" component={Signup} /> */}
        </Switch>
    </div>
  );
}

export default App;
