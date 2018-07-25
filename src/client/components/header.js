import React from 'react';
import { Link } from 'react-router-dom';
import { Section, Container } from 'components/styledComponents';
import Icon from 'components/icon';

export default () => (
  <Section>
    <Container isFluid>
      <Link to="/">
        <Icon name="logo" size={512} color="#fff" />
      </Link>
    </Container>
  </Section>
);
