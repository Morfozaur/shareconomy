const fetchLogin = data => ({type: 'LOG-ACTION', payload: data});

const fetchFundraisers = data => ({type: 'FUNDRAISERS', payload: data});
const fetchOrganisations = data => ({type: 'ORGANISATIONS', payload: data});
const fetchFoundations = data => ({type: 'FOUNDATIONS', payload: data});
const fetchMotto = data => ({type: 'MOTTO', payload: data});
const fetchList = data => ({type: 'LIST', payload: data});

export {
    fetchLogin,
    fetchFoundations,
    fetchFundraisers,
    fetchOrganisations,
    fetchMotto,
    fetchList
}