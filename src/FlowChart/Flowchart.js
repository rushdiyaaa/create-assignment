import React from 'react';
import ReactFlow from 'reactflow';
import 'reactflow/dist/style.css';
import './Flowchart.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NodePopup from '../NodePopUp/NodePopup';

const initialNodes = [
  { id: '1', sourcePosition: 'right', targetPosition: 'left', position: { x: 300, y: 50 }, data: { label: 'Research', details: ['Gather customer preferences and market trends.', 'Analyze competitors offerings and market demands'] }, style: { background: '#EEB5EB' }, className: 'bold-label lavender', },

  { id: '2', targetPosition: 'left', sourcePosition: 'right', position: { x: 550, y: 30 }, data: { label: 'External', details: ['Survey potential customers and gather feedback.', 'Analyze market trends and competitor offerings.'] }, style: { background: '#EEB5EB' }, className: 'bold-label lavender' },
  { id: '16', targetPosition: 'left', sourcePosition: 'right', position: { x: 800, y: 2 }, data: { label: 'C2B', details: ['Collaborate with businesses for customized vehicle solutions.', 'Incorporate feedback from business clients to enhance product offerings.'] }, className: 'bold-label lavender ', style: { background: '#EEB5EB' } },
  { id: '17', targetPosition: 'left', sourcePosition: 'right', position: { x: 800, y: 100 }, data: { label: 'B2C', details: ['Engage directly with end consumers for feedback and preferences.', 'Develop marketing strategies tailored to consumer needs and behaviors.'] }, className: 'bold-label lavender', style: { background: '#EEB5EB' } },

  { id: '3', targetPosition: 'left', position: { x: 550, y: 80 }, data: { label: 'Internal', details: ['Interview internal stakeholders for insights and suggestions.', 'Review previous market research data and internal reports.'] }, className: 'bold-label lavender', style: { background: '#EEB5EB' } },

  { id: '4', sourcePosition: 'right', targetPosition: 'left', position: { x: 300, y: 150 }, data: { label: 'Planning', details: ['Develop project timeline and budget.', 'Identify resources and required technologies.'] }, className: 'bold-label blue', style: { background: '#65DFF6' } },
  { id: '8', targetPosition: 'left', position: { x: 550, y: 130 }, data: { label: 'PRD', details: ['Define product requirements based on market research.', 'Establish key feastures and functionalities for the vehicle'] }, className: 'bold-label blue', style: { background: '#65DFF6' } },
  { id: '9', targetPosition: 'left', position: { x: 550, y: 180 }, data: { label: 'Specs', details: ['Detail technical specifications for manufacturing', 'Determine materials, dimensions, and performance standards.'] }, className: 'bold-label blue', style: { background: '#65DFF6' } },

  { id: '5', sourcePosition: 'right', targetPosition: 'left', position: { x: 300, y: 250 }, data: { label: 'Designing', details: ['Create vehicle concept and prototype.', 'Test and refine design for functionality and safety.'] }, className: 'bold-label brown', style: { background: '#FAA300' } },
  { id: '10', targetPosition: 'left', position: { x: 550, y: 230 }, data: { label: 'Hardware', details: ['Design physical components of the vehicle, such as chassis and body.', 'Specify materials and manufacturing processes for durability and safety.'] }, className: 'bold-label brown', style: { background: '#FAA300' } },
  { id: '11', targetPosition: 'left', position: { x: 550, y: 280 }, data: { label: 'Software', details: ['Develop embedded software for vehicle systems, like engine control and infotainment.', 'Ensure software compatibility and integration with hardware components.'] }, className: 'bold-label brown', style: { background: '#FAA300' } },

  { id: '6', sourcePosition: 'right', targetPosition: 'left', position: { x: 300, y: 350 }, data: { label: 'Manufacturing', details: ['Produce vehicle components and assemble.', 'Implement quality control measures throughout production.'] }, className: 'bold-label pink', style: { background: '#FFB5DA' } },
  { id: '12', targetPosition: 'left', position: { x: 550, y: 330 }, data: { label: 'Material', details: ['Source and procure raw materials for vehicle components.', 'Ensure materials meet quality and safety standards.'] }, className: 'bold-label pink', style: { background: '#FFB5DA' } },
  { id: '13', targetPosition: 'left', position: { x: 550, y: 380 }, data: { label: 'Production', details: ['Implement efficient manufacturing processes for assembly.', 'Monitor production progress and quality control measures'] }, className: 'bold-label pink', style: { background: '#FFB5DA' } },

  { id: '7', sourcePosition: 'right', targetPosition: 'left', position: { x: 300, y: 450 }, data: { label: 'Sales/Marketing', details: ['Develop marketing strategies and distribution channels.', 'Launch vehicle in targeted markets and monitor sales performance.'] }, className: 'bold-label green', style: { background: '#C8DF52' } },
  { id: '14', targetPosition: 'left', position: { x: 550, y: 430 }, data: { label: 'Online', details: ['Develop online marketing strategies to reach a wide audience.', 'Establish an online sales platform for direct customer purchases.'] }, className: 'bold-label green', style: { background: '#C8DF52' } },
  { id: '15', targetPosition: 'left', position: { x: 550, y: 480 }, data: { label: 'Dealership', details: ['Partner with dealerships for offline sales and distribution.', 'Provide training and support to dealership staff for product knowledge.'] }, className: 'bold-label green', style: { background: '#C8DF52' } },

  { id: '18', sourcePosition: 'right', position: { x: 10, y: 250 }, data: { label: 'Car Manufacturing Project' }, className: 'bold-label', style: { background: 'rgb(255, 253, 203)' } },
  { id: '19', targetPosition: 'left', sourcePosition: 'right', position: { x: 1000, y: 2 }, data: { label: 'Online', details: ['Analyze online reviews and social media discussions.', 'Monitor online forums and communities for consumer insights.'] }, className: 'bold-label lavender', style: { background: '#EEB5EB' } },
  { id: '20', targetPosition: 'left', sourcePosition: 'right', position: { x: 1000, y: 60 }, data: { label: 'Interview', details: ['Conduct interviews with individual consumers for detailed feedback.', 'Use focus groups to gather opinions and preferences.'] }, className: 'bold-label lavender', style: { background: '#EEB5EB' } },
  { id: '21', targetPosition: 'left', sourcePosition: 'right', position: { x: 1000, y: 120 }, data: { label: 'Public Data', details: ['Utilize public databases and reports for market analysis.', 'Review government statistics and industry research reports.'] }, className: 'bold-label lavender', style: { background: '#EEB5EB' } },
  { id: '22', targetPosition: 'left', sourcePosition: 'right', position: { x: 1000, y: 180 }, data: { label: 'Health', details: ['Adapt to health trends and lifestyles in vehicle design.', 'Include relevant health and wellness features.'] }, className: 'bold-label lavender', style: { background: '#EEB5EB' } },
  { id: '23', targetPosition: 'left', position: { x: 1200, y: 90 }, hidden: true },
];

const initialEdges = [
  { id: '1', source: '1', target: '2' },
  { id: '2', source: '1', target: '3' },
  { id: '3', source: '4', target: '8' },
  { id: '4', source: '4', target: '9' },
  { id: '5', source: '5', target: '10' },
  { id: '6', source: '5', target: '11' },
  { id: '7', source: '6', target: '12' },
  { id: '8', source: '6', target: '13' },
  { id: '9', source: '7', target: '14' },
  { id: '10', source: '7', target: '15' },
  { id: '11', source: '2', target: '16' },
  { id: '12', source: '2', target: '17' },
  { id: '13', source: '18', target: '1' },
  { id: '14', source: '18', target: '4' },
  { id: '15', source: '18', target: '5' },
  { id: '16', source: '18', target: '6' },
  { id: '17', source: '18', target: '7' },
  { id: '18', source: '17', target: '19' },
  { id: '19', source: '17', target: '20' },
  { id: '20', source: '17', target: '21' },
  { id: '21', source: '17', target: '22' },
  { id: '22', source: '19', target: '23' },
  { id: '23', source: '20', target: '23' },
  { id: '24', source: '21', target: '23' },
  { id: '25', source: '22', target: '23' },
];


export default function Flowchart() {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const [popupData, setPopupData] = useState({ label: '', details: [], position: { x: 0, y: 0 }, background: '' });

  const handleNodeMouseEnter = (event, node) => {
    if (node.data && Array.isArray(node.data.details)) {
      setPopupData({ label: node.data.label, details: node.data.details, position: { x: node.position.x + 120, y: node.position.y - 20 }, background: node.style.background });
      setShowPopup(true);
    }
  };


  const handleNodeMouseLeave = () => {
    setShowPopup(false);
  };

  const handleNodeClick = (event, node) => {
    if (node.data.label === 'Car Manufacturing Project') {
      navigate('/more-details');
    }
    if (node.data.label === 'Research') {
      navigate('/research-details');
    }
    if (node.data.label === 'Planning') {
      navigate('/planning-details');
    }
    if (node.data.label === 'Designing') {
      navigate('/designing-details');
    }
    if (node.data.label === 'Manufacturing') {
      navigate('/manufacturing-details');
    }
    if (node.data.label === 'Sales/Marketing') {
      navigate('/sales-details');
    }
  };

  return (
    <div style={{ width: '100vw', height: '97vh', marginTop: 10, marginBottom: 10 }}>
      <ReactFlow
        nodes={initialNodes}
        edges={initialEdges}
        onNodeMouseEnter={handleNodeMouseEnter}
        onNodeMouseLeave={handleNodeMouseLeave}
        onNodeClick={handleNodeClick}


      />
      {showPopup && <NodePopup label={popupData.label} details={popupData.details} position={popupData.position} background={popupData.background} />}

    </div>
  );
}

