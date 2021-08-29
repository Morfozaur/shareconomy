import {combineReducers} from "redux";
import {isLogged} from "./isLogged";
import {foundations} from "./foundations";
import {organisations} from "./organisations";
import {fundraisers} from "./fundraisers";

const allReducers = combineReducers( {
    isLogged,
    foundations,
    organisations,
    fundraisers
});

export {allReducers}