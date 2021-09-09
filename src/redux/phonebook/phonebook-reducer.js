import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { changeFilter, addContactRequest, addContactSuccess, addContactError, deleteContactRequest, deleteContactSuccess, deleteContactError, fetchContactRequest, fetchContactSuccess, fetchContactError} from './phonebook-action';




const contacts = createReducer([], {
    [fetchContactSuccess]: (_, {payload})=>payload,
    [addContactSuccess]: (state, action) => [...state, action.payload],
    [deleteContactSuccess]: (state, action) => state.filter(({ id }) => id !== action.payload),
})

const filter = createReducer('', {
    [changeFilter]: (_, {payload}) => payload,
} )

const loading = createReducer(false, {
    [addContactRequest]: ()=>true,
    [addContactSuccess]: ()=>false,
    [addContactError]: ()=>false,
    [deleteContactRequest]: ()=>true,
    [deleteContactSuccess]: ()=>false,
    [deleteContactError]: ()=>false,
    [fetchContactRequest]: ()=>true,
    [fetchContactSuccess]: ()=>false,
    [fetchContactError]: ()=>false
})

export default combineReducers({
    contacts,
    filter,
    loading
});