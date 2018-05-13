import * as actions from './actions'
import { mainReducer } from './rootReducer'

//testing actions

describe('actions', () => {
  it('should create an action to add a person', () => {
    const newPerson = {id: 'testId', firstName: 'John', lastName: 'Doe', date: new Date(), points: 11}
    const expectedAction = {
      type: 'ADD_PERSON',
      newPerson
    }
    expect(actions.addPerson(newPerson)).toEqual(expectedAction)
  })
  it('should create an action to delete a person', () => {
    const deletedPersonId = 'testId'
    const expectedAction = {
      type: 'DELETE_PERSON',
      deletedPersonId
    }
    expect(actions.deletePerson(deletedPersonId)).toEqual(expectedAction)
  })
    it('should create an action to edit a person', () => {
    const editedPerson = {id: 'testId', firstName: 'Rick', lastName: 'Smith', date: new Date(), points: 12}
    const expectedAction = {
      type: 'EDIT_PERSON',
      editedPerson
    }
    expect(actions.editPerson(editedPerson)).toEqual(expectedAction)
  })
    it('should create an action to change filter date', () => {
    const filterDate = new Date()
    const expectedAction = {
      type: 'SET_FILTER_DATE',
      filterDate
    }
    expect(actions.changeFilter(filterDate)).toEqual(expectedAction)
  })
})

//testing reducers

describe('main reducer', () => {
  it('should return the initial state', () => {
    expect(mainReducer(undefined, {})).toEqual({
      data: [],
      filterDate: null
    })
  })

  it('should handle SET_FILTER_DATE action', () => {
    const filterDate = new Date()
    expect(mainReducer(
      undefined,
      {
        type: 'SET_FILTER_DATE',
        filterDate
      }
    )).toEqual({data: [], filterDate})
  })

  it('should handle ADD_PERSON action', () => {
    const newPerson = {
      id: '1',
      firstName: 'John',
      lastName: 'Doe',
      date: new Date(),
      points: 20
    }

    expect(mainReducer(
        undefined,
        {
            type: 'ADD_PERSON',
            newPerson
        }
    )).toEqual({data: [newPerson], filterDate: null})
    
    const secondPerson = {
      id: '2',
      firstName: 'Jessica',
      lastName: 'Smith',
      date: new Date(),
      points: 23
    }

    expect(mainReducer(
      {
        data: [newPerson],
        filterDate: null
      },
      {
        type: 'ADD_PERSON',
        newPerson: secondPerson
      }
    )).toEqual({data: [newPerson, secondPerson], filterDate: null})
  })

  it('should handle EDIT_PERSON action', () => {
    const person = {
      id: '1',
      firstName: 'John',
      lastName: 'Doe',
      date: new Date(),
      points: 20
    }
    const editedPerson = {
      id: '1',
      firstName: 'Jack',
      lastName: 'Smith',
      date: new Date(),
      points: 23
    }
    expect(mainReducer(
      {data: [person], filterDate: null},
      {
        type: 'EDIT_PERSON',
        editedPerson
      }
    )).toEqual({data: [editedPerson], filterDate: null})
  })

  it('should handle DELETE_PERSON action', () => {
    const firstPerson = {
      id: '1',
      firstName: 'John',
      lastName: 'Doe',
      date: new Date(),
      points: 20
    }
    const secondPerson = {
      id: '2',
      firstName: 'Jack',
      lastName: 'Smith',
      date: new Date(),
      points: 23
    }
    expect(mainReducer(
      {data: [firstPerson, secondPerson], filterDate: null},
      {
        type: 'DELETE_PERSON',
        deletedPersonId: '2'
      }
    )).toEqual({data: [firstPerson], filterDate: null})

     expect(mainReducer(
      {data: [secondPerson], filterDate: null},
      {
        type: 'DELETE_PERSON',
        deletedPersonId: '1'
      }
    )).toEqual({data: [secondPerson], filterDate: null})
  })
})
