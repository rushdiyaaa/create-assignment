import React from 'react';

export default function NodePopup({ label, details, position, background }) {
  return (
    <div className="popup" style={{ position: 'absolute', top: position.y, left: position.x, backgroundColor: background, padding: 10, border: '1px solid black', borderRadius: 5 }}>
      <h3 style={{ marginTop: 0, paddingTop: 0, fontSize: 18, fontWeight: 600 }}>{label}</h3>

      <ul style={{ margin: 0, paddingLeft: 7 }}>
        {details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
    </div>
  );
}
