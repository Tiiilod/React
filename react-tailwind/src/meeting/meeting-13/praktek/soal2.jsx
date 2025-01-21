// import axios from "axios";
// import { useState, useEffect } from "react";

// export default function AxiosStore() {
//   const [products, setProducts] = useState([]);
//   const [cart, setCart] = useState({});

//   useEffect(() => {
//     axios
//       .get("https://fakestoreapi.com/products")
//       .then((response) => {
//         setProducts(response.data);
//       })
//       .catch((error) => console.error("Error fetching data:", error));
//   }, []);

//   const updateCart = (title, price, change) => {
//     setCart((prevCart) => {
//       const currentQuantity = prevCart[title]?.quantity || 0;
//       const newQuantity = currentQuantity + change;

//       if (newQuantity <= 0) {
//         const { [title]: _, ...rest } = prevCart;
//         return rest;
//       }

//       return {
//         ...prevCart,
//         [title]: { price, quantity: newQuantity },
//       };
//     });
//   };

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">Shopping Store</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//         {products.map((product) => (
//           <ShoppingCard
//             key={product.id}
//             title={product.title}
//             price={product.price}
//             src={product.image}
//             description={product.description}
//             quantity={cart[product.title]?.quantity || 0}
//             onUpdate={updateCart}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// function ShoppingCard({ title, price, src, description, quantity, onUpdate }) {
//   return (
//     <div className="border rounded-lg shadow-lg p-4 w-full flex flex-col transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:bg-gray-100">
//       <img
//         src={src}
//         alt={title}
//         className="w-full h-60 object-contain rounded-t-lg"
//       />
//       <div className="py-2 flex-grow">
//         <h2 className="text-md font-semibold">{title}</h2>
//         <p className="text-gray-700">Harga: Rp.{price}</p>
//         <p className="text-gray-700">Quantity: {quantity}</p>
//         <p className="text-gray-700">Total: Rp.{quantity * price}</p>
//         <p className="text-gray-600 mt-2">{description}</p>
//       </div>
//       <div className="flex justify-between mt-2">
//         <button
//           className="bg-blue-500 text-white w-1/3 py-2 rounded-md"
//           onClick={() => onUpdate(title, price, 1)}
//         >
//           Tambah
//         </button>
//         <button
//           className="bg-red-500 text-white w-1/3 py-2 rounded-md"
//           onClick={() => onUpdate(title, price, -1)}
//         >
//           Kurang
//         </button>
//       </div>
//     </div>
//   );
// }


import axios from "axios";
import { useState, useEffect } from "react";

export default function AxiosStore() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const updateCart = (title, price, change) => {
    setCart((prevCart) => {
      const currentQuantity = prevCart[title]?.quantity || 0;
      const newQuantity = currentQuantity + change;

      if (newQuantity <= 0) {
        const { [title]: _, ...rest } = prevCart;
        return rest;
      }

      return {
        ...prevCart,
        [title]: { price, quantity: newQuantity },
      };
    });
  };

  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <header className="bg-green-600 text-white py-4 px-6 rounded-lg shadow-md mb-6">
        <h1 className="text-2xl font-bold">AxiosStore</h1>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.price}
            src={product.image}
            description={product.description}
            quantity={cart[product.title]?.quantity || 0}
            onUpdate={updateCart}
          />
        ))}
      </div>
      <CartSummary cart={cart} />
    </div>
  );
}

function ProductCard({ title, price, src, description, quantity, onUpdate }) {
  return (
    <div className="border rounded-lg shadow-md p-4 bg-white flex flex-col transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
      <img
        src={src}
        alt={title}
        className="w-full h-60 object-contain rounded-t-lg"
      />
      <div className="py-2 flex-grow">
        <h2 className="text-md font-semibold text-gray-800 truncate">{title}</h2>
        <p className="text-gray-600">Harga: Rp.{price.toLocaleString()}</p>
        <p className="text-gray-600">Quantity: {quantity}</p>
        <p className="text-green-600 font-semibold">Total: Rp.{(quantity * price).toLocaleString()}</p>
        <p className="text-gray-500 text-sm mt-2 truncate">{description}</p>
      </div>
      <div className="flex justify-between mt-4">
        <button
          className="bg-green-500 text-white w-1/3 py-2 rounded-md hover:bg-green-600"
          onClick={() => onUpdate(title, price, 1)}
        >
          Tambah
        </button>
        <button
          className="bg-red-500 text-white w-1/3 py-2 rounded-md hover:bg-red-600"
          onClick={() => onUpdate(title, price, -1)}
        >
          Kurang
        </button>
      </div>
    </div>
  );
}

function CartSummary({ cart }) {
  const totalItems = Object.values(cart).reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = Object.values(cart).reduce((sum, item) => sum + item.quantity * item.price, 0);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-md p-4 flex justify-between items-center">
      <p className="text-gray-700">
        Total Barang: <span className="font-bold">{totalItems}</span>
      </p>
      <p className="text-green-600 font-bold">
        Total Harga: Rp.{totalPrice.toLocaleString()}
      </p>
      <button className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700">
        Checkout
      </button>
    </div>
  );
}
