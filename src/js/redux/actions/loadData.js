import {db} from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import {fetchFoundations, fetchFundraisers, fetchOrganisations} from "./allFetchers";

const loadData = () => {
    return async (dispatch) => {
        await getDocs(collection(db, 'foundations'))
            .then(res => {
                const data = res.docs.map(post => post.data());
                dispatch(fetchFoundations(data));
            })

        await getDocs(collection(db, 'fundraisings'))
            .then(res => {
                const data = res.docs.map(post => post.data());
                dispatch(fetchFundraisers(data));
            })

        await getDocs(collection(db, 'organisations'))
            .then(res => {
                const data = res.docs.map(post => post.data());
                dispatch(fetchOrganisations(data));
            })
    }
}

export {loadData}