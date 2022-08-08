import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import HomePage from './HomePage';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import AboutPage from './AboutPage';
import ClassesPage from './ClassesPage';
import PackagePage from './PackagePage';
import ContactPage from './ContactPage';
import BlogList from './BlogList';
import DetailsBlog from './DetailsBlog';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/classes" element={<ClassesPage />} />
      <Route path="/package" element={<PackagePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/blog" element={<BlogList />} />
      <Route path="/detailsblog" element={<DetailsBlog />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
