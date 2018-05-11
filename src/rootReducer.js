import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import uuidv4 from 'uuid/v4'

const initialState = {
  data: [
    {id: '1', firstName: 'Jan', lastName: 'Kowalski', points: 30, date: 'wwwwwwww'},
    {id: '2', firstName: 'Karol', lastName: 'Nowak', points: 25, date: 'wwwwwwww'},
    {id: '3', firstName: 'Marian', lastName: 'Wójcik', points: 35, date: 'wwwwwwww'},
    {id: '4', firstName: 'Kamil', lastName: 'Bednarz', points: 40, date: 'wwwwwwww'}
  ],
  highlightedPersonId: '',
  filterDate: ''
}

const mainReducer = (state = initialState, action = []) => {
  switch (action.type) {
    case 'CHANGE_HIGHLIGHTED_PERSON':
      return {...state, highlightedPersonId: action.newHighlightedPersonId }
    case 'ADD_PERSON':
      return {...state, data: [...state.data, {id: uuidv4(), ...action.newPerson}] }
    case 'EDIT_PERSON':
      return {...state, data: state.data.map(obj => obj.id === action.editedPerson.id ? action.editedPerson : obj) }
    case 'DELETE_PERSON':
      return {...state, data: state.data.filter(obj => obj.id !== action.deletedPersonId) }
    case 'SET_FILTER_DATE':
      return {...state, filterDate: action.filterDate }
    default:
      return state
  }
}

export default combineReducers({
    main: mainReducer,
    form: formReducer
})