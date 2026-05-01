import ProductCart from "./productsCart/ProductCart";

const getDataFromApi = async () => {
  const res = await fetch(
    "https://category-a8-jackfruitt.vercel.app/products.json",
  );

  const data = await res.json();
  return data;
};
const ShowSomeProducts = async () => {
  const products = await getDataFromApi();
  console.log(products);
  return (
    <div className="mt-15">
      <h1 className="text-4xl font-bold text-center">Popular Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-7 p-10 px-20">
        {products.slice(0, 3).map((product) => (
          <ProductCart key={product.id} product={product}></ProductCart>
        ))}
      </div>
    </div>
  );
};

export default ShowSomeProducts;
