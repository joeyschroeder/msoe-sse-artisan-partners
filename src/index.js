import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import { Root } from './components/root/root';
import { store } from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Root store={store} />);
