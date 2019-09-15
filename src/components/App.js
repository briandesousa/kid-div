import React, { useState } from 'react';

export default function App() {
  const [title] = useState('Kid Div');
  return (
    <h1>{title}</h1>
  );
}