import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Biology from "./biology/Biology";
import Cv from "./cv/Cv";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Router>
          <Routes>
              {/* Define routes for different components */}
              <Route path="/" element={<App/>} />
              <Route path="/cv" element={<Cv />} />
              <Route path="/biologia" element={<Biology />} />
          </Routes>
      </Router>
  </React.StrictMode>
);

