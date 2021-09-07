import '../../scss/main.scss'
import Home from "./Home";
import Login from "./Login";
import Logout from "./Logout";
import Register from "./Register";
import Menu from "./Menu";
import Form from "./Form";
import {HashRouter, Route, Switch} from "react-router-dom";
import {useSelector} from "react-redux";

function App() {

    const isLogged = useSelector(state => state.isLogged)

    return (
        <HashRouter>
            <Menu/>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/logowanie' component={Login}/>
                <Route path='/rejestracja' component={Register}/>
                <Route path='/wylogowano' component={Logout}/>
                {isLogged && <Route path='/oddaj-rzeczy' component={Form}/>}
                {!isLogged && <Route path='/oddaj-rzeczy' component={Login}/>}
            </Switch>
        </HashRouter>
  );
}

export default App;
