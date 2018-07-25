import React from 'react';
import styled from 'styled-components';
import { media, spacing } from 'configs/styles';

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
