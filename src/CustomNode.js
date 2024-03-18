import React from 'react';

// CustomNode component
const CustomNode = ({ data }) => {
  return (
    <div>
      <p>{data.label}</p>
      <p>{data.details}</p>
    </div>
  );
};

// CustomEdge component
const CustomEdge = ({ data }) => {
  return (
    <div>
      <p>{data.label}</p>
    </div>
  );
};

export { CustomNode, CustomEdge };
