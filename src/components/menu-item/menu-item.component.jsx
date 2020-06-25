import React from 'react';
import './menu-item.styles.scss';
// we want to power up our menuItem component to have access to router information
import { withRouter } from 'react-router-dom';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div className={`${size} menu-item`} onClick={() =>
    // knows where its been matched up to in the current url, then append the url: /somematchedURL/linkURL
    history.push(`${match.url}${linkUrl}`)}>
    <div style={{ backgroundImage: `url(${imageUrl})` }} className='background-image'>
    </div>

    <div className="content">
      <h1 className="title">{title}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
)
// returns a super powered menuItem component with access to location, match & history props of routing
export default withRouter(MenuItem);