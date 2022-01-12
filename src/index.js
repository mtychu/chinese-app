import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import ToDo from './components/ToDo/ToDo';
import UploadPage from './components/Upload/UploadPage';
import Review from './components/Review/Review';

import reportWebVitals from './reportWebVitals';

import Amplify from 'aws-amplify';
import awsExports from './aws-exports';
Amplify.configure(awsExports);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='home' element={<App />} />
        <Route path='todo' element={<ToDo />} />
        <Route path='upload-page' element={<UploadPage />} />
        <Route path='review' element={<Review />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
  //https://reactrouter.com/
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
