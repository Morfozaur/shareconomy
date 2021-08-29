import Home from "./Home";
import Login from "./Login";
import Logout from "./Logout";
import Register from "./Register";
import Menu from "./Menu";
import {Route, Switch} from "react-router-dom";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import {useDispatch} from "react-redux";
import {fetchLogin} from "../redux/actions/allFetchers";
import {app} from "../firebase";


function App() {

    const dispatch = useDispatch()

    const auth = getAuth(app);
    onAuthStateChanged(auth, user => {
        if (user) {dispatch(fetchLogin(true))}
        else {dispatch(fetchLogin('false'))}
    })

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
