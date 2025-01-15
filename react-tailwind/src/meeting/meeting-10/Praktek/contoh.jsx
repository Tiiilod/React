import React, { useState, useEffect } from 'react';

function AppContoh() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Menarik data dari API ketika komponen pertama kali dimuat
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);  // [] artinya efek hanya dijalankan sekali saat komponen pertama kali dimuat

  return (
    <div>
      <h1>Data dari API:</h1>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
    </div>
  );
}

export default AppContoh;