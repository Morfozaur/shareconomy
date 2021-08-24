
// W pliku `App.js` należy przygotować strukturę potrzebną do uruchomienia Routingu naszej aplikacji. Strona główna powinna być widoczna w ścieżce `/` i do tego celu renderować komponent `Home` z folderu `components`.
//
//     Komponent `Home` z kolei powinien składać się z mniejszych komponentów odpowiedzialnych za poszczególne sekcje/grupy, np. `HomeHeader`, `HomeThreeColumns` itd.
//
//     Pliki mogą nosić dokładnie taką samą nazwę jak komponent.
//


import Home from "./components/Home";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Register from "./components/Register";
import {Route, Switch} from "react-router-dom";
import Menu from "./components/Menu";

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
