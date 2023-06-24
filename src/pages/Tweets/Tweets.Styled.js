import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledLinkBack = styled(NavLink)`
  margin: 20px 0 0 10px;
  display: flex;
  align-items: center;
  color: #373737;
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  border: none;

  &:hover,
  &:focus {
    color: #00c57e;
  }
`;
