const fetchLogin = data => ({type: 'LOG-ACTION', payload: data});
const fetchLoginData = data => ({type: 'SET-DATA', payload: data});

const fetchFundraisers = data => ({type: 'FUNDRAISERS', payload: data});
const fetchOrganisations = data => ({type: 'ORGANISATIONS', payload: data});
const fetchFoundations = data => ({type: 'FOUNDATIONS', payload: data});
const fetchMotto = data => ({type: 'MOTTO', payload: data});
const fetchList = data => ({type: 'LIST', payload: data});
const fetchForm = data => ({type: 'FORM', payload: data});
const fetchDonation = data => ({type: 'FORM-DONATION', payload: data});
const fetchBags = data => ({type: 'FORM-BAGS', payload: data});
const fetchCity = data => ({type: 'FORM-CITY', payload: data});
const fetchRecipient = data => ({type: 'FORM-RECIPIENT', payload: data});
const fetchOrganisation = data => ({type: 'FORM-ORGANISATION', payload: data});
const fetchStreet = data => ({type: 'FORM-STREET', payload: data});
const fetchClientCity = data => ({type: 'FORM-CLIENT-CITY', payload: data});
const fetchPostcode = data => ({type: 'FORM-POSTCODE', payload: data});
const fetchPhone = data => ({type: 'FORM-PHONE', payload: data});
const fetchDate = data => ({type: 'FORM-DATE', payload: data});
const fetchTime = data => ({type: 'FORM-TIME', payload: data});
const fetchNotes = data => ({type: 'FORM-NOTES', payload: data});


export {
    fetchLogin,
    fetchFoundations,
    fetchFundraisers,
    fetchOrganisations,
    fetchMotto,
    fetchList,
    fetchLoginData,
    fetchForm,
    fetchDonation,
    fetchBags,
    fetchCity,
    fetchRecipient,
    fetchOrganisation,
    fetchStreet,
    fetchClientCity,
    fetchDate,
    fetchNotes,
    fetchPhone,
    fetchPostcode,
    fetchTime
}