import React from 'react';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import { Route } from 'react-router-dom';
import CollectionPage from '../collection/collection.component';

// retrieve match prop from Route component
const ShopPage = ({ match }) => {
  console.log(match.path)
  return (
    <div className='shop-page'>
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      {/* display items based on category */}
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  )
}

export default ShopPage;