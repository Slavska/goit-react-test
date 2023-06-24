import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

import bg1x from 'img/bg1x.png';
import bg2x from 'img/bg2x.png';
import bgWebp1x from 'img/bgWebp1x.webp';
import bgWebp2x from 'img/bgWebp2x.webp';
import bgAvif1x from 'img/bgAvif1x.avif';
import bgAvif2x from 'img/bgAvif2x.avif';

export const StyledLink = styled(NavLink)`
  padding: 14px 28px;
  margin-top: 250px;
  text-align: center;
  border-radius: 10.311px;
  background: #5cd3a8;
  box-shadow: 0px 3.4369285106658936px 3.4369285106658936px 0px
    rgba(0, 0, 0, 0.25);
  color: #373737;
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  border: none;

  &:hover,
  &:focus {
    background-color: #00c57e;
  }
`;

export const HomeContainer = styled.div`
  margin: 50px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 200px;
  background-image: image-set(
    url(${bgAvif1x}) type('image/avif') 1x,
    url(${bgAvif2x}) type('image/avif') 2x,
    url(${bgWebp1x}) type('image/webp') 1x,
    url(${bgWebp2x}) type('image/webp') 2x,
    url(${bg1x}) type('image/png') 1x,
    url(${bg2x}) type('image/png') 2x
  );
  background-repeat: no-repeat;
  background-size: 308px 168px;
  background-position: top 28px center;
`;

export const Head = styled.h1`
  font-size: 70px;
  font-weight: 600;
  text-align: center;
  margin-top: 100px;
  text-transform: uppercase;
  color: #5736a3;
`;
