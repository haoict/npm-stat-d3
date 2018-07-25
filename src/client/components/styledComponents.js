import React from 'react';
import styled from 'styled-components';
import { media, spacing, colors, fontWeight } from 'configs/styles';
import { Link } from 'react-router-dom';

export const Section = styled.section`
  padding: ${spacing.large} ${spacing.big};
`;

export const Container = styled(({ isFluid, children, ...rest }) => (
  <div {...rest}>{children}</div>
))`
  position: relative;
  display: block;
  width: 100%;
  margin: 0 auto;

  ${({ isFluid }) =>
    isFluid &&
    `
    margin-left: ${spacing.big} !important;
    margin-right: ${spacing.big} !important;;
    max-width: none !important;;
    width: auto !important;;
  `};

  ${media.greaterThan('desktop')`
    width: 960px;
    max-width: 960px;
  `};

  ${media.greaterThan('widescreen')`
    width: 1152px;
    max-width: 1152px;
  `};

  ${media.greaterThan('fullhd')`
    width: 1344px;
    max-width: 1344px;
  `};
`;

export const Svg = styled(({ size, color, children, ...rest }) => <svg {...rest}>{children}</svg>)`
  display: inline-block;
  height: ${({ size }) => size}px;
  width: ${({ size }) => size}px;
  vertical-align: middle;

  path {
    fill: ${({ color }) => color};
  }
`;

export const HeaderLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;

  svg {
    margin-right: ${spacing.small};
  }

  h2 {
    color: ${colors.orange};
    margin: 0;
    font-weight: ${fontWeight.semibold};
  }
`;