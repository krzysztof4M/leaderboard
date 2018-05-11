import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

const initialState = {
  data: [
    {id: '1', firstName: 'Jan', lastName: 'Kowalski', points: 30, date: 'wwwwwwww'},
    {id: '2', firstName: 'Karol', lastName: 'Nowak', points: 25, date: 'wwwwwwww'},
    {id: '3', firstName: 'Marian', lastName: 'Wójcik', points: 35, date: 'wwwwwwww'},
    {id: '4', firstName: 'Kamil', lastName: 'Bednarz', points: 40, date: 'wwwwwwww'}
  ],
  highlightedPersonId: ''
}

const mainReducer = (state = initialState, action = []) => {
  switch (action.type) {
    case 'CHANGE_HIGHLIGHTED_PERSON':
      return {...state, highlightedPersonId: action.newHighlightedPersonId }
    default:
      return state
  }
}

export default combineReducers({
    main: mainReducer,
    form: formReducer
})