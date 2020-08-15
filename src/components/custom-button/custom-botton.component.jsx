import React from 'react';
import { CustomButtonContainer } from './custom-button.styles'

// pull children of props
// destructure other props into the button
// e.g. if submit is passed into the button, it will receive it
const CustomButton = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>
    {children}
  </CustomButtonContainer >
)

export default CustomButton;