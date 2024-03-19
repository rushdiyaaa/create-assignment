import React from 'react';
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';
import Flowchart from "./FlowChart/Flowchart";
import MoreDetails from './MoreDetails/MoreDetails';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Flowchart />} />
        <Route path="/more-details" element={<MoreDetails />} />
      </Routes>
    </Router>
  );
};
export default App;