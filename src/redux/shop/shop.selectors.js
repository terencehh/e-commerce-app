import memoize from 'lodash.memoize';

// create a memoized selector for our directory component
// this ensures that components which depend on our state do not rerender whenever state changes that is unrelated to the user state.

import { createSelector } from 'reselect';

// object which matches a string value to its respective ID number
const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackers: 3,
  womens: 4,
  mens: 5
}

const selectShop = state => state.shop;

export const selectCollections = createSelector([selectShop], shop => shop.collections);

// as collectionUrlParam is a dynamic argument we need to memoize the whole function using a memoize helper function
export const selectCollection = memoize(collectionUrlParam => createSelector([selectCollections], collections => collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam])));