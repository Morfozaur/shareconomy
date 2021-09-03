import '../../scss/main.scss'
import Home from "./Home";
import Login from "./Login";
import Logout from "./Logout";
import Register from "./Register";
import Menu from "./Menu";
import Form from "./Form";
import {HashRouter, Route, Switch} from "react-router-dom";
// import {useDispatch} from "react-redux";
// import {fetchLogin} from "../redux/actions/allFetchers";
// import {app} from "../firebase";


function App() {

    // const dispatch = useDispatch()

    // const auth = getAuth(app);
    // onAuthStateChanged(auth, user => {
    //     if (user) {dispatch(fetchLogin(true))}
    //     else {dispatch(fetchLogin('false'))}
    // })



    return (
        <HashRouter>
            <Menu/>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/logowanie' component={Login}/>
                <Route path='/rejestracja' component={Register}/>
                <Route path='/wylogowano' component={Logout}/>
                <Route path='/oddaj-rzeczy' component={Form}/>
            </Switch>
        </HashRouter>
  );
}

export default App;
