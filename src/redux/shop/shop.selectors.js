import memoize from 'lodash.memoize';

// create a memoized selector for our directory component
// this ensures that components which depend on our state do not rerender whenever state changes that is unrelated to the user state.

import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector([selectShop], shop => shop.collections);

// as collectionUrlParam is a dynamic argument we need to memoize the whole function using a memoize helper function
export const selectCollection = memoize(collectionUrlParam => createSelector(
  [selectCollections],
  collections => collections[collectionUrlParam]
));