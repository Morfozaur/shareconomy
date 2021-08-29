import {combineReducers} from "redux";
import {isLogged} from "./isLogged";
import {motto} from "./motto";
import {helpers} from "./helpers";
import {currList} from "./currList";

const allReducers = combineReducers( {
    isLogged,
    helpers,
    motto,
    currList
});

export {allReducers}