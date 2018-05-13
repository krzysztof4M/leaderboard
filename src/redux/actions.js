export function addPerson(newPerson) {
  return {
    type: 'ADD_PERSON',
    newPerson
  }
}

export function deletePerson(deletedPersonId) {
  return {
    type: 'DELETE_PERSON',
    deletedPersonId
  }
}

export function editPerson(editedPerson) {
  return {
    type: 'EDIT_PERSON',
    editedPerson
  }
}

export function changeFilter(filterDate) {
  return {
    type: 'SET_FILTER_DATE',
    filterDate
  }
}