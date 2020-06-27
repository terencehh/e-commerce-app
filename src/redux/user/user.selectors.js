// create a memoized selector for our user component
// this ensures that components which depend on our user state do not rerender whenever state changes that is unrelated to the user state.

import { createSelector } from 'reselect';

const selectUser = state => state.user;

export const selectCurrentUser = createSelector([selectUser], (user) => user.currentUser);