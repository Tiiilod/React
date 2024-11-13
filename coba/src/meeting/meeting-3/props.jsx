// Parent to Child

// function ChildComponent() {
//     return (
//         <div>
//             <h1>Child Component</h1>
//             <p>Ini adalah child component</p>
//         </div>
//     );
// }

// function ChildComponent() {
//     return (
//         <div>
//             <h1>{tittle}</h1>
//             <p>{description}</p>
//         </div>
//     );
// }

// export default function ParentComponent() {
//     return (
//         <>
//         <ChildComponent tittle="ini tittle" description="ini description" />
//         </>
//     )
// }




// Props Value

// function ChildComponent({ title = "coba judul", description="coba description", age=24 }) {
//     return (
//         <>
//           <ChildComponent />
//         </>
//       );
// }




// Props Spread Syntax

function Image({ src, alt, size }) {
  return (
    <>
      <img src={src} alt={alt} style={{ width: size, height: size }} />
    </>
  );
}

function ChildComponent({ title, description, age, ...props }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{age}</p>
      <Image {...props} />
    </div>
  );
}

export default function ParentComponent() {
  return (
    <>
      <ChildComponent
        title="Title"
        description="Description"
        age={20}
        src={"../../public/image.png"}
        alt="cobaReacssst"
        size="1000px"
      />
    </>
  );
}



function Children({ children }) {  
    return <div>{children}</div>;  
  }  

  <Children>  
  <ChildComponent  
    title="Title"  
    description="Description"  
    age={20}  
    src="../../public/cobaReact.png"  
    alt="cobaReact"  
    size="100px"  
  >  
  </ChildComponent>  
</Children>  


