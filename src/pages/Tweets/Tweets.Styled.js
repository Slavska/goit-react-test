import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledLinkBack = styled(NavLink)`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  color: #373737;
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  border: none;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: #00c57e;
  }
`;
