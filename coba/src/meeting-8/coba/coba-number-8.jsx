import { useState } from "react";

export default function Numberss() {
  const [umur, setUmur] = useState(15);

  function tambahUmur() {
    setUmur(umur + 1);
  }
  return (
    <>
      <button onClick={tambahUmur}>You pressed me {umur} times</button>
      {/* <Halo /> */}
    </>
  );
}

export function Halo() {
  return (
    <>
      <h2>asd</h2>
    </>
  );
}

// export default Numbers;
