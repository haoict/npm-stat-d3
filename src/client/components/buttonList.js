import React from 'react';
import { compose, pure, withHandlers } from 'recompose';
import { Button, ButtonList } from 'components/styledComponents';
import { graphColors } from 'configs/styles';

const PackageButtonList = ({ renderButton, packages }) => (
  <ButtonList>{packages.map(renderButton)}</ButtonList>
);

export default compose(
  withHandlers({
    renderButton: ({ removePackage }) => (packageName, index) => (
      <Button key={packageName} onClick={removePackage(packageName)} color={graphColors[index]}>
        {packageName} X
      </Button>
    )
  }),
  pure
)(PackageButtonList);
