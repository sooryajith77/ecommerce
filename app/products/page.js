// "use client";

// import { useEffect, useState } from "react";
// import ProductList from "./ProductList";
// import ProductSkeleton from "../components/ProductSkeleton"

// export default function ProductsPage() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchData() {
//       const res = await fetch("https://fakestoreapi.com/products");
//       const data = await res.json();
//       setProducts(data);
//       setLoading(false);
//     }
//     fetchData();
//   }, []);

//   return (
//     <div className="container mt-4">
//       <h2 className="mb-4"><center>Products</center></h2>

//       {loading ? (
//         <ProductSkeleton />    // ⬅️ Beautiful Skeleton Loader
//       ) : (
//         <ProductList products={products} />
//       )}
//     </div>
//   );
// }



"use client";

import { useEffect, useState } from "react";
import ProductList from "./ProductList";
import ProductSkeleton from "../components/ProductSkeleton";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();

        // Convert images array to single image
        const formattedProducts = data.products.map(product => ({
          ...product,
          image: product.images?.[0] || ""
        }));

        setProducts(formattedProducts);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4"><center>Products</center></h2>

      {loading ? (
        <ProductSkeleton />    // ⬅️ Beautiful Skeleton Loader
      ) : (
        <ProductList products={products} />
      )}
    </div>
  );
}
