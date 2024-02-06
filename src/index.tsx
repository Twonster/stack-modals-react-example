import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {ModalContextProvider} from "./contexts/Modals";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <ModalContextProvider>
          <App />
      </ModalContextProvider>
  </React.StrictMode>
);

