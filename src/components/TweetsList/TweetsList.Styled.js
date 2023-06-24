import styled from '@emotion/styled';

import bg1x from 'img/bg1x.png';
import bg2x from 'img/bg2x.png';
import bgWebp1x from 'img/bgWebp1x.webp';
import bgWebp2x from 'img/bgWebp2x.webp';
import bgAvif1x from 'img/bgAvif1x.avif';
import bgAvif2x from 'img/bgAvif2x.avif';

import Logo1x from 'img/Logo1x.png';
import Logo2x from 'img/Logo2x.png';
import LogoWebp1x from 'img/LogoWebp1x.webp';
import LogoWebp2x from 'img/LogoWebp2x.webp';
import LogoAvif1x from 'img/LogoAvif1x.avif';
import LogoAvif2x from 'img/LogoAvif2x.avif';

import Ellipse1x from 'img/Ellipse1x.png';
import Ellipse2x from 'img/Ellipse2x.png';
import EllipseWebp1x from 'img/EllipseWebp1x.webp';
import EllipseWebp2x from 'img/EllipseWebp2x.webp';
import EllipseAvif1x from 'img/EllipseAvif1x.avif';
import EllipseAvif2x from 'img/EllipseAvif2x.avif';

import Rectangle1x from 'img/Rectangle1x.png';
import Rectangle2x from 'img/Rectangle2x.png';
import RectangleWebp1x from 'img/RectangleWebp1x.webp';
import RectangleWebp2x from 'img/RectangleWebp2x.webp';
import RectangleAvif1x from 'img/RectangleAvif1x.avif';
import RectangleAvif2x from 'img/RectangleAvif2x.avif';

export const Card = styled.li`
  border-radius: 20px;
  background-color: #5736a3;
  width: 380px;
  height: 460px;
  background-image: image-set(
      url(${LogoAvif1x}) type('image/avif') 1x,
      url(${LogoAvif2x}) type('image/avif') 2x,
      url(${LogoWebp1x}) type('image/webp') 1x,
      url(${LogoWebp2x}) type('image/webp') 2x,
      url(${Logo1x}) type('image/png') 1x,
      url(${Logo2x}) type('image/png') 2x
    ),
    image-set(
      url(${bgAvif1x}) type('image/avif') 1x,
      url(${bgAvif2x}) type('image/avif') 2x,
      url(${bgWebp1x}) type('image/webp') 1x,
      url(${bgWebp2x}) type('image/webp') 2x,
      url(${bg1x}) type('image/png') 1x,
      url(${bg2x}) type('image/png') 2x
    ),
    image-set(
      url(${EllipseAvif1x}) type('image/avif') 1x,
      url(${EllipseAvif2x}) type('image/avif') 2x,
      url(${EllipseWebp1x}) type('image/webp') 1x,
      url(${EllipseWebp2x}) type('image/webp') 2x,
      url(${Ellipse1x}) type('image/png') 1x,
      url(${Ellipse2x}) type('image/png') 2x
    ),
    image-set(
      url(${RectangleAvif1x}) type('image/avif') 1x,
      url(${RectangleAvif2x}) type('image/avif') 2x,
      url(${RectangleWebp1x}) type('image/webp') 1x,
      url(${RectangleWebp2x}) type('image/webp') 2x,
      url(${Rectangle1x}) type('image/png') 1x,
      url(${Rectangle2x}) type('image/png') 2x
    );
  background-repeat: no-repeat;
  background-size: 76px 22px, 308px 168px, 80px 80px, 380px 12px;
  background-position: top 20px left 20px, top 28px center, top 182px center,
    top 218px center;
`;

export const Img = styled.img`
  border-radius: 50%;
  width: 58px;
  height: 58px;
  margin-left: 162px;
  margin-bottom: 26px;
  margin-top: 189px;
`;

export const Text = styled.p`
  color: #ebd8ff;
  font-size: 20px;
  font-weight: 500;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 10px;
`;

export const ButtonFollow = styled.button`
  display: flex;
  margin: 0 auto;
  padding: 14px 28px;
  border-radius: 10.311px;
  background: #ebd8ff;
  box-shadow: 0px 3.4369285106658936px 3.4369285106658936px 0px
    rgba(0, 0, 0, 0.25);
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  border: none;

  &:hover,
  &:focus {
    background-color: #aa8ee9;
  }
`;
export const ButtonFollowing = styled.button`
  display: flex;
  padding: 14px 28px;
  margin: 0 auto;
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

export const ButtonLoadMore = styled.button`
  display: flex;
  padding: 14px 28px;
  border-radius: 10.311px;
  background: #5cd3a8;
  box-shadow: 0px 3.4369285106658936px 3.4369285106658936px 0px
    rgba(0, 0, 0, 0.25);
  color: #373737;
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  border: none;
  margin: 48px auto;

  &:hover,
  &:focus {
    background-color: #00c57e;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 48px;
  justify-content: center;
`;

export const Head = styled.h1`
  color: #5736a3;
  font-size: 30px;
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;
  margin: 20px 0;
`;
