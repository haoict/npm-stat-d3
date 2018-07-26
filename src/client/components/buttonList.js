import React from 'react';
import { compose, pure, withHandlers } from 'recompose';
import { Button, ButtonList } from 'components/styledComponents';
import { graphColors, colors } from 'configs/styles';
import Icon from 'components/icon';

const PackageButtonList = ({ renderButton, packages }) => (
  <ButtonList>{packages.map(renderButton)}</ButtonList>
);

export default compose(
  withHandlers({
    renderButton: ({ removePackage }) => (packageName, index) => (
      <Button key={packageName} onClick={removePackage(packageName)} color={graphColors[index]}>
        {packageName}
        <Icon name="close" size={16} color={colors.white} />
      </Button>
    )
  }),
  pure
)(PackageButtonList);
