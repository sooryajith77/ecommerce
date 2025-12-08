



import ProductList from "./ProductList";
import ProductSkeleton from "../components/ProductSkeleton";

export default async function ProductsPage() {
  let products = [];

  try {
    const res = await fetch("https://dummyjson.com/products", {
      cache: "no-store", 
    });

    const data = await res.json();

    products = data.products.map((product) => ({
      ...product,
      image: product.images?.[0] || "",
    }));
  } catch (err) {
    console.error(err);
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-4">
        <center>Products</center>
      </h2>

      {products.length === 0 ? (
        <ProductSkeleton />
      ) : (
        <ProductList products={products} />
      )}
    </div>
  );
}
