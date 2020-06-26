import React from 'react';
import './custom-button.styles.scss';

// pull children of props
// destructure other props into the button
// e.g. if submit is passed into the button, it will receive it
const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
  <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
    {children}
  </button >
)

export default CustomButton;