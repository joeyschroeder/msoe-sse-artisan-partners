import React from 'react';
import { Screen } from '../screen/screen';
import styles from './splash-view.module.scss';

export function SplashView() {
  return (
    <Screen centerContent className={styles.root}>
      <div className={styles.primary}>
        <h1>
          <strong>Client-Side</strong>
          <br />
          UI Demo
        </h1>
        <p>
          This project is designed to get you up and running with your next
          front-end, JavaScript application faster than ever! This project
          includes <strong>React</strong>, <strong>Redux</strong>, and many
          other utilities for easily maintaining a front-end application.
        </p>
      </div>
    </Screen>
  );
}
