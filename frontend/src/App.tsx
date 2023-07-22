import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom';

import Layout from './components/Layout/Layout';
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
      <Layout>
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
          </Routes>
      </Layout>
  );
}

export default App;
