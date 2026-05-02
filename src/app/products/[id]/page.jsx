import Image from "next/image";
import { Button } from "@heroui/react";
import { Star, ShoppingCart, ArrowLeft } from "@gravity-ui/icons";
import Link from "next/link";
const getDataFromApi = async () => {
  const res = await fetch(
    `https://category-a8-jackfruitt.vercel.app/products.json`,
    { cache: "no-store" },
  );

  const data = await res.json();
  return data;
};

const ProductDetails = async ({ params }) => {
  const { id } = await params;

  const data = await getDataFromApi(id);
  const product = data.find((p) => Number(p.id) === Number(id));
  console.log(data, "data", id, "id");
  console.log(product);
  if (!product) {
    return <p className="text-center mt-10 text-red-500">Product not found</p>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <Link href="/products">
        <Button variant="light" className="mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
      </Link>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>

          <p className="text-gray-500 text-sm">
            Brand: <span className="font-medium">{product.brand}</span>
          </p>

          <div className="flex items-center gap-2 text-yellow-500">
            <Star className="w-5 h-5 fill-yellow-500" />
            <span className="text-gray-700">{product.rating}</span>
          </div>

          <p className="text-2xl font-bold text-orange-500">${product.price}</p>

          <p
            className={`text-sm font-medium ${
              product.stock > 0 ? "text-green-600" : "text-red-500"
            }`}
          >
            {product.stock > 0 ? `In Stock (${product.stock})` : "Out of Stock"}
          </p>

          <p className="text-gray-600 leading-relaxed">{product.description}</p>

          <div className="flex gap-4 mt-4">
            <Button className="bg-orange-500 text-white hover:bg-orange-600 flex items-center gap-2">
              <ShoppingCart className="w-5 h-5" />
              Add to Cart
            </Button>

            <Button variant="bordered">Buy Now</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
