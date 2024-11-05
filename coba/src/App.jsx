import React from "react";

// function Apps() {
//   return (
//     <>
//       <h1>title</h1>
//       <p>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe beatae
//         aut totam porro optio ab quidem voluptatum fuga reprehenderit
//         praesentium! Nulla impedit dolorem maxime perspiciatis!
//       </p>
//     </>
//   );
// }



function Apps() {  
  const title = "Coba JSX{}";  
  const pargarphs = "Lorem ipsum dolor sit amet.";  
  const tema = {  
  pargarph :{  
  backgroundColor : "blue",  
  color : "white",  
  },  
  };  
  
  return (  
  <>  
  <img src="cobaReact.png" alt="cobaReact" />  
  <h1 style={{ color: "red" }}>{title}</h1>  
  <p className="testing" style={tema.pargarph}>  
  {pargarphs}  
  </p>  
  </>  
  );  
  }  

export default Apps;
