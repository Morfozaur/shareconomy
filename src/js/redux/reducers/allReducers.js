import {combineReducers} from "redux";
import {isLogged} from "./isLogged";
import {motto} from "./motto";
import {helpers} from "./helpers";
import {currList} from "./currList";
import {loginData} from "./loginData";
import {currForm} from "./currForm";
import {formData} from "./formData";

const allReducers = combineReducers( {
    isLogged,
    helpers,
    motto,
    currList,
    loginData,
    currForm,
    formData
});

export {allReducers}