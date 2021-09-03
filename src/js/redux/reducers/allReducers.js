import {combineReducers} from "redux";
import {isLogged} from "./isLogged";
import {motto} from "./motto";
import {helpers} from "./helpers";
import {currList} from "./currList";
import {loginData} from "./loginData";

const allReducers = combineReducers( {
    isLogged,
    helpers,
    motto,
    currList,
    loginData
});

export {allReducers}