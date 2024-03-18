import React from 'react';
import ReactFlow from 'react-flow-renderer';

const elements = [
  { id: '1', data: { label: 'Node 1' }, position: { x: 100, y: 100 } },
  { id: '2', data: { label: 'Node 2' }, position: { x: 200, y: 200 } },
  { id: 'e1-2', source: '1', target: '2', animated: true }
];

const FlowChart = () => {
  return (
    <ReactFlow elements={elements} style={{ height: 300 }} />
  );
}

// const initialNodes = [
//   { id: '1', position: { x: 100, y: 50 }, data: { label: 'Research' } },
//   { id: '2', position: { x: 100, y: 150 }, data: { label: 'Planning' } },
//   { id: '3', position: { x: 100, y: 250 }, data: { label: 'Designing' } },
//   { id: '4', position: { x: 100, y: 350 }, data: { label: 'Manufacturing' } },
//   { id: '5', position: { x: 100, y: 450 }, data: { label: 'Sales/Marketing' } },
// ];

// const initialEdges = initialNodes.slice(0, -1).map((node, index) => ({
//   id: `e${node.id}-${initialNodes[index + 1].id}`,
//   source: node.id,
//   target: initialNodes[index + 1].id,
// }));

 
// export default function App() {
//   return (
//     <div style={{ width: '100vw', height: '100vh' }}>
//       <ReactFlow nodes={initialNodes} edges={initialEdges} />
//     </div>
//   );
// }

export default FlowChart;
