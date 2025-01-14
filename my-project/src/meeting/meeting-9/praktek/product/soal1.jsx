import React, { useState } from "react";
import { products } from "./product";

function ShoppingCard({ title, price, src, quantity, onUpdate }) {
  const increment = () => {
    onUpdate(title, price, 1);
  };

  const decrement = () => {
    if (title === "Produk C" && quantity <= 0) {
      return;
    }
    if (quantity > 0) {
      onUpdate(title, price, -1);
    }
  };

  return (
    <div className="border rounded-lg shadow-lg p-4">
      <img
        src={src}
        alt={title}
        className="w-full h-32 object-cover rounded-t-lg"
      />
      <div className="py-2">
        <h2 className="text-md font-semibold">{title}</h2>
        <p className="text-gray-700">Harga: Rp.{price}</p>
        <p className="text-gray-700">Quantity: {quantity}</p>
        <p className="text-gray-700">Total: Rp.{quantity * price}</p>
      </div>
      <div className="flex justify-between mt-2">
        <button
          className="bg-blue-500 text-white w-1/3 py-2 rounded-md"
          onClick={increment}
        >
          Tambah
        </button>
        <button
          className="bg-red-500 text-white w-1/3 py-2 rounded-md"
          onClick={decrement}
        >
          Kurang
        </button>
      </div>
    </div>
  );
}

export default function Produk() {
  const [totalHarga, setTotalHarga] = useState(0);
  const [rincian, setRincian] = useState({});

  const handleUpdate = (title, price, quantityChange) => {
    setTotalHarga((prevTotal) => prevTotal + price * quantityChange);

    setRincian((prevRincian) => {
      const prevData = prevRincian[title] || { quantity: 0, total: 0 };
      const newQuantity = prevData.quantity + quantityChange;

      return {
        ...prevRincian,
        [title]: {
          quantity: newQuantity > 0 ? newQuantity : 0,
          total: newQuantity > 0 ? newQuantity * price : 0,
        },
      };
    });
  };

  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <ShoppingCard
            key={product.id}
            title={product.title}
            price={product.price}
            src={product.image}
            quantity={rincian[product.title]?.quantity || 0}
            onUpdate={handleUpdate}
          />
        ))}
      </div>
      <div className="mt-6 border-t pt-4">
        <h2 className="text-xl font-semibold">Rincian Harga:</h2>
        <ul className="list-disc list-inside">
          {products.map((product) => (
            <li key={product.id} className="text-gray-700">
              {product.title} x {rincian[product.title]?.quantity || 0} = Rp.
              {rincian[product.title]?.total || 0}
            </li>
          ))}
        </ul>
        <p className="text-lg font-bold mt-4">Total Harga: Rp.{totalHarga}</p>
      </div>
    </>
  );
}

// const products = [
//   {
//     id: 1,
//     title: "Produk A",
//     price: 20000,
//     image: "https://via.placeholder.com/300x200",
//   },
//   {
//     id: 2,
//     title: "Produk B",
//     price: 30000,
//     image: "https://via.placeholder.com/300x200",
//   },
//   {
//     id: 3,
//     title: "Produk C",
//     price: 50000,
//     image: "https://via.placeholder.com/300x200",
//   },
// ];





// import React, { useState } from "react";

// const products = [
//   {
//     id: 1,
//     title: "Produk A",
//     price: 20000,
//     image: "https://via.placeholder.com/300x200",
//   },
//   {
//     id: 2,
//     title: "Produk B",
//     price: 30000,
//     image: "https://via.placeholder.com/300x200",
//   },
//   {
//     id: 3,
//     title: "Produk C",
//     price: 50000,
//     image: "https://via.placeholder.com/300x200",
//   },
// ];

// const Card = ({ product, quantity, setQuantity }) => {
//   const handleIncrease = () =>
//     setQuantity((prev) => ({
//       ...prev,
//       [product.id]: (prev[product.id] || 0) + 1,
//     }));

//   const handleDecrease = () =>
//     setQuantity((prev) => ({
//       ...prev,
//       [product.id]: Math.max((prev[product.id] || 0) - 1, 0),
//     }));

//   return (
//     <div className="border rounded-lg shadow-lg p-4 max-w-xs mx-auto bg-white hover:shadow-2xl transform hover:scale-105 transition duration-300">
//       <img
//         src={product.image}
//         alt={product.title}
//         className="w-full h-40 object-cover mb-4 rounded-md"
//       />
//       <h3 className="text-xl font-bold text-gray-800">{product.title}</h3>
//       <p className="text-gray-600 text-sm">
//         Harga: <span className="font-semibold text-gray-900">Rp {product.price.toLocaleString()}</span>
//       </p>
//       <div className="flex justify-center items-center my-4">
//         <button
//           onClick={handleDecrease}
//           className="px-4 py-2 bg-red-500 text-white rounded-l hover:bg-red-600 transition duration-300"
//         >
//           -
//         </button>
//         <span className="px-4 py-2 border-t border-b text-lg font-semibold text-gray-700">
//           {quantity[product.id] || 0}
//         </span>
//         <button
//           onClick={handleIncrease}
//           className="px-4 py-2 bg-green-500 text-white rounded-r hover:bg-green-600 transition duration-300"
//         >
//           +
//         </button>
//       </div>
//     </div>
//   );
// };

// const ProductList = () => {
//   const [quantity, setQuantity] = useState({});

//   const totalPerProduct = products.map((product) => ({
//     ...product,
//     quantity: quantity[product.id] || 0,
//     total: (quantity[product.id] || 0) * product.price,
//   }));

//   const grandTotal = totalPerProduct.reduce((sum, product) => sum + product.total, 0);

//   return (
//     <div className="p-8 bg-gray-100 min-h-screen">
//       <h1 className="text-3xl font-extrabold text-center mb-10 text-gray-800">
//         Daftar Produk
//       </h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {products.map((product) => (    
//           <Card
//             key={product.id}
//             product={product}
//             quantity={quantity}
//             setQuantity={setQuantity}
//           />
//         ))}
//       </div>
//       <div className="mt-12 bg-white p-6 rounded-lg shadow-lg">
//         <h2 className="text-2xl font-bold mb-4">Rincian Pembelian</h2>
//         <ul className="space-y-2">
//           {totalPerProduct.map(
//             (product) =>
//               product.quantity > 0 && (
//                 <li key={product.id} className="text-gray-700">
//                   {product.title} x {product.quantity} ={" "}
//                   <span className="font-bold">
//                     Rp {product.total.toLocaleString()}
//                   </span>
//                 </li>
//               )
//           )}
//         </ul>
//         <div className="mt-6 border-t pt-4 text-xl font-bold text-gray-800">
//           Total Harga: Rp {grandTotal.toLocaleString()}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductList;