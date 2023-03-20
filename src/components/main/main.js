import { Outlet } from 'react-router-dom';
import React from 'react';
import { App } from '../app/app';
import { AppBar } from '../app-bar/app-bar';
import { AppBarButton } from '../app-bar-button/app-bar-button';
import { Icon } from '../icon/icon';

export function Main() {
  return (
    <App>
      <AppBar>
        <AppBarButton to="/">
          <Icon name="home" />
        </AppBarButton>
        <AppBarButton to="redux">
          <Icon name="database" />
        </AppBarButton>
      </AppBar>
      <Outlet />
    </App>
  );
}
