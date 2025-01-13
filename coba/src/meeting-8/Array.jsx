import { useState } from "react";

function UseStates() {
  const [umur, setUmur] = useState(15);

  function tambahUmur() {
    setUmur(umur + 1);
  }
  return (
    <>
      <button onClick={tambahUmur}>You pressed me {umur} times</button>
    </>
  );
}

export default UseStates;
