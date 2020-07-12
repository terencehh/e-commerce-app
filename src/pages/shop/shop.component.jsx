import React from 'react';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component'

// we need to store data of our shop collection hence requires state
const ShopPage = ({ collections }) => (
  <div className='shop-page'>
    <CollectionsOverview />
  </div>
)

export default ShopPage;