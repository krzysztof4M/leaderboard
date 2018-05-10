import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

const initialState = {
  data: [{id: '1', firstName: 'Jan', lastName: 'Kowalski', points: 30, date: 'wwwwwwww'}, {id: '2', firstName: 'Karol', lastName: 'Nowak', points: 25, date: 'wwwwwwww'}]
}

const mainReducer = (state = initialState, action = []) => {
  switch (action.type) {
    default:
      return state
  }
}

export default combineReducers({
    main: mainReducer,
    form: formReducer
})