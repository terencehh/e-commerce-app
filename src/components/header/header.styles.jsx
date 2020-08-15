import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

// reusable css for different component styling
const OptionContainerStyles = css`
  padding: 10px 15px;
  cursor: pointer;
`;

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  // ensures that child items are spread apart
  justify-content: space-between;
  margin-bottom: 25px;
`;

// we want to style a React Link Element
export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

// reuse styling for link component
export const OptionLink = styled(Link)`
  ${OptionContainerStyles}
`;

// reuse styling for div component
export const OptionDiv = styled.div`
  ${OptionContainerStyles}
`;