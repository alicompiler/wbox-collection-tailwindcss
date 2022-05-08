import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Example } from './__examples/Example';

ReactDOM.render(
    <React.StrictMode>
        <div className="light">
            <Example />
        </div>
    </React.StrictMode>,
    document.getElementById('root'),
);
