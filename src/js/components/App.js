import Home from "./Home";
import Login from "./Login";
import Logout from "./Logout";
import Register from "./Register";
import {Route, Switch} from "react-router-dom";
import Menu from "./Menu";

function App() {
  return (
        <>
            <Menu/>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/logowanie' component={Login}/>
                <Route path='/wylogowano' component={Logout}/>
                <Route path='/rejestracja' component={Register}/>
            </Switch>
        </>
  );
}

export default App;
