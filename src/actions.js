export function changeHighlightedPerson(id) {
  return {
    type: 'CHANGE_HIGHLIGHTED_PERSON',
    newHighlightedPersonId: id
  }
}