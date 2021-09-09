import axios from "axios";
import shortid from "shortid"
import * as actions from './phonebook-action'

axios.defaults.baseURL = 'https://connections-api.herokuapp.com'


export const fetchContacts = () => dispatch => {
    axios.get('/contacts').then(({ data }) => dispatch(actions.fetchContactSuccess(data))).catch(error=>actions.addContactError(error))
}

export const addContact = (name, number) => dispatch => {
  const contact = { name, number, id: shortid.generate() };
  dispatch(actions.addContactRequest());
  axios.post('/contacts', contact)
    .then(({ data }) => dispatch(actions.addContactSuccess(data)))
    .catch(error => dispatch(actions.addContactError(error)));
};

export const deleteContact = id => dispatch => {
    dispatch(actions.deleteContactRequest());

    axios.delete(`/contacts/${id}`)
        .then(() => dispatch(actions.deleteContactSuccess(id)))
        .catch(error => dispatch(actions.deleteContactError(error)));

}
