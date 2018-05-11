const persistedActions = ['ADD_PERSON', 'DELETE_PERSON', 'EDIT_PERSON']

export const persistMiddleware = ({getState}) => next => action => {
  next(action)
  if (persistedActions.indexOf(action.type) > -1) {
    const serializedData = JSON.stringify(getState().main.data);
    localStorage.setItem('leaderboardData', serializedData)
  }
}