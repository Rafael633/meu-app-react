import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ErrorPage from './components/ErrorPage';
import FetchNews from './components/FetchNews';
import Root from './routes/root';
import Contador from './components/Contator';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
          <Route path="noticias" element={<FetchNews />} />
          <Route path="contador" element={<Contador />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();