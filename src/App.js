import React from 'react';
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';
import Flowchart from "./FlowChart/Flowchart";
import MoreDetails from './MoreDetails/MoreDetails';
import ResearchDetails from './Research/ResearchDetails';
import PlanningDetails from './Planning/PlanningDetails';
import DesigningDetails from './Design/DesigningDetails';
import ManufacturingDetails from './Manufacturing/Manufacturingdetails';
import SalesDetails from './Sales/SalesDetails';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Flowchart />} />
        <Route path="/more-details" element={<MoreDetails />} />
        <Route path="/research-details" element={<ResearchDetails />} />
        <Route path="/planning-details" element={<PlanningDetails />} />
        <Route path="/designing-details" element={<DesigningDetails />} />
        <Route path="/manufacturing-details" element={<ManufacturingDetails />} />
        <Route path="/sales-details" element={<SalesDetails />} />
      </Routes>
    </Router>
  );
};
export default App;