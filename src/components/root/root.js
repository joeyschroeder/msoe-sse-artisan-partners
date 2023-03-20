import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Main } from '../main/main';
import packageJson from '../../../package.json';
import { ReduxView } from '../redux-view/redux-view';
import { SplashView } from '../splash-view/splash-view';

// The application is deployed to GitHub Pages. GitHub Pages prefixes the
// application root with the package name: 'front-end-starter' so we use is as
// the basename for the router when in 'production' mode'
const basename = process.env.BABEL_ENV === 'production' ? packageJson.name : '';

export function Root(props) {
  const { store } = props;

  return (
    <Provider store={store}>
      <BrowserRouter basename={basename}>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route index element={<SplashView />} />
            <Route path="redux" element={<ReduxView />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

Root.propTypes = {
  store: PropTypes.object,
};

Root.defaultProps = {
  store: null,
};
