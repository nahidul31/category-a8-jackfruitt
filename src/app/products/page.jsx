import ProductCart from "@/components/shared-page/homePage/productsCart/ProductCart";
import productsData from "@/data/productsData.json";
// const getDataFromApi = () => {
//   return productsData;
// };

export const metadata = {
  title: "AllProducts | SunCart",
};
// const getDataFromApi = async () => {
//   const res = await fetch(
//     "https://category-a8-jackfruitt.vercel.app/products.json",
//     { cache: "no-store" },
//   );
//   console.log("Status:", res.status);
//   console.log("Content-Type:", res.headers.get("content-type"));
//   const data = await res.json();
//   return data;
// };
const getDataFromApi = async () => {
  const res = await fetch(
    "https://category-a8-jackfruitt.vercel.app/products.json",
    { cache: "no-store" },
  );

  const contentType = res.headers.get("content-type");

  if (!res.ok) {
    throw new Error(`HTTP error! Status: ${res.status}`);
  }

  if (!contentType || !contentType.includes("application/json")) {
    const text = await res.text();
    console.error("Not JSON response:", text);
    throw new Error("API did not return JSON");
  }

  const data = await res.json();
  console.log(data);
  return data;
};

const AllProductsPage = async () => {
  const products = await getDataFromApi();
  // console.log(products);
  return (
    <div className="mt-15">
      <h1 className="text-4xl font-bold text-center">All Popular Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 p-5 sm:p-15 sm:px-30">
        {products.map((product) => (
          <ProductCart key={product.id} product={product}></ProductCart>
        ))}
      </div>
    </div>
  );
};

export default AllProductsPage;
