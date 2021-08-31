import {db} from "../../firebase";
import { collection, getDocs, getDoc, doc } from "firebase/firestore";
import {fetchFoundations, fetchFundraisers, fetchList, fetchMotto, fetchOrganisations} from "./allFetchers";


const loadData = () => {
    return async (dispatch) => {
        await getDocs(collection(db, 'foundations'))
            .then(res => {
                const data = res.docs.map(post => post.data());
                dispatch(fetchFoundations(data));
                dispatch(fetchList(data));
            })

        await getDocs(collection(db, 'fundraisers'))
            .then(res => {
                const data = res.docs.map(post => post.data());
                dispatch(fetchFundraisers(data));
            })

        await getDocs(collection(db, 'organisations'))
            .then(res => {
                const data = res.docs.map(post => post.data());
                dispatch(fetchOrganisations(data));
            })
        await getDoc(doc(db, 'motto', 'motto'))
            .then(res => {
                dispatch(fetchMotto(res.data()));
            })
    }
}

export {loadData}