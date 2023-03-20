import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  incrementSample,
  incrementSampleByAmount,
  resetSample,
} from '../../store/sample/sample';
import { BlockButton } from '../block-button/block-button';
import { Screen } from '../screen/screen';
import styles from './redux-view.module.scss';

export function ReduxView() {
  const sampleValue = useSelector((state) => state.sample.value);
  const dispatch = useDispatch();

  return (
    <Screen className={styles.root}>
      <h1>REDUX</h1>
      <p>Redux is a predictable state container for JavaScript apps.</p>
      <p>
        This application includes <strong>React-Redux</strong> along with a
        sample reducer and action set following the{' '}
        <a
          href="https://medium.com/@scbarrus/the-ducks-file-structure-for-redux-d63c41b7035c"
          target="_blank"
          rel="noopener noreferrer"
        >
          Redux Duck Pattern
        </a>
        .
      </p>
      <h2>
        Redux Value:
        {sampleValue}
      </h2>
      <p>
        Click the following buttons to update and reset the value stored in the
        Redux store. Note that you can leave this page and return and the value
        will be saved.
      </p>
      <BlockButton onClick={() => dispatch(incrementSample())}>
        Update
      </BlockButton>
      <div style={{ marginBottom: '1rem' }}>
        <input
          value={sampleValue}
          type="number"
          onChange={(event) =>
            dispatch(incrementSampleByAmount(event.target.value))
          }
        />
      </div>
      <BlockButton onClick={() => dispatch(resetSample())}>Reset</BlockButton>
    </Screen>
  );
}
