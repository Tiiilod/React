import { useEffect, useState } from "react";
// import { useState } from "react";

function Nodepency() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    console.log(`Tombol ditekan sebanyak`);
  });

  return (
    <div>
      <p>Count : {count}</p>
      <button onClick={() => setCount(count + 1)}>Tambah</button>
      <p>Count2 : {count2}</p>
      <button onClick={() => setCount2(count2 + 1)}>Tambah</button>
    </div>
  );
}

export default Nodepency;



// import React, { useEffect, useState } from 'react';

// function Contoh() {
//   const [angka, setAngka] = useState(0);

//   useEffect(() => {
//     console.log(`Angka sekarang: ${angka}`);
//   }, [angka]); // Akan jalan setiap `angka` berubah

//   return (
//     <div>
//       <p>Angka: {angka}</p>
//       <button onClick={() => setAngka(angka + 1)}>Tambah</button>
//     </div>
//   );
// }
// export default Contoh;