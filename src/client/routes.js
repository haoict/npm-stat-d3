import React from 'react';
import { Switch } from 'react-router';
import CommonLayout from 'components/commonLayout';
import App from 'components/app';

export default (
  <Switch>
    <CommonLayout exact path="/" component={App} />
    <CommonLayout path="/:query" component={App} />
  </Switch>
);
