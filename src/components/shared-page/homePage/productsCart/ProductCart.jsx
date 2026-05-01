"use client";

import Image from "next/image";
import { Button } from "@heroui/react";
import { Star, ShoppingCart, Eye } from "@gravity-ui/icons";
const ProductCart = ({ product }) => {
  const { id, name, price, rating, image } = product;
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <div className="relative w-full h-56 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition duration-300"
        />
      </div>

      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">
          {product.name}
        </h3>

        <div className="flex items-center gap-1 text-sm text-yellow-500">
          <Star className="w-4 h-4 fill-yellow-500" />
          <span className="text-gray-600">{product.rating}</span>
        </div>

        <p className="text-lg font-bold text-orange-500">${product.price}</p>

        <div className="flex gap-2 mt-3">
          <Button
            size="sm"
            className="flex-1 bg-orange-500 text-white hover:bg-orange-600"
          >
            <Eye className="w-4 h-4 mr-1" />
            Show Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
