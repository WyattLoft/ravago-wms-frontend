import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    axios.get('https://ravago-wms-backend.onrender.com/api/test')
      .then(res => setMessage(res.data.message))
      .catch(() => setMessage('❌ Failed to connect to backend'));
  }, []);

  return (
    <div>
      <h1>Ravago WMS</h1>
      <p>Backend says: {message}</p>
    </div>
  );
}

export default App;
