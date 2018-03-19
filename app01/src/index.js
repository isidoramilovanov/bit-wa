import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import postsData from './posts.js';

ReactDOM.render(<App posts={postsData}/>, document.getElementById('root'));
registerServiceWorker();
