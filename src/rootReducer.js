import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import uuidv4 from 'uuid/v4'

const initialState = {
  data: JSON.parse(localStorage.getItem('leaderboardData')) || [],
  highlightedPersonId: '',
  filterDate: null
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