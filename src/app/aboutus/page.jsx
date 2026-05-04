"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="px-4 md:px-10 lg:px-20 py-10 space-y-16">
      <div className="text-center space-y-4">
        <h1 className="text-3xl md:text-5xl font-bold text-orange-500">
          About SunCart
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto">
          SunCart is your go-to destination for summer essentials. We bring you
          trendy, high-quality products to make your summer stylish, safe, and
          enjoyable.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl shadow-md hover:shadow-xl transition text-center">
          <Icon
            icon="mdi:shopping-outline"
            className="text-4xl text-orange-500 mx-auto"
          />
          <h2 className="text-xl font-semibold mt-4">Premium Quality</h2>
          <p className="text-gray-500 text-sm mt-2">
            Carefully selected products that meet high-quality standards.
          </p>
        </div>

        <div className="p-6 rounded-2xl shadow-md hover:shadow-xl transition text-center">
          <Icon
            icon="mdi:truck-fast-outline"
            className="text-4xl text-orange-500 mx-auto"
          />
          <h2 className="text-xl font-semibold mt-4">Fast Delivery</h2>
          <p className="text-gray-500 text-sm mt-2">
            Quick and reliable delivery service for all your orders.
          </p>
        </div>

        <div className="p-6 rounded-2xl shadow-md hover:shadow-xl transition text-center">
          <Icon
            icon="mdi:shield-check-outline"
            className="text-4xl text-orange-500 mx-auto"
          />
          <h2 className="text-xl font-semibold mt-4">Secure Shopping</h2>
          <p className="text-gray-500 text-sm mt-2">
            Safe and secure payment and authentication system.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="relative w-full h-64 md:h-96">
          <Image
            src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1200&q=80"
            alt="summer"
            fill
            className="rounded-2xl shadow-lg object-cover"
          />
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold">
            Why Choose SunCart?
          </h2>
          <p className="text-gray-500">
            We focus on delivering the best summer shopping experience. Our
            products are trendy, affordable, and carefully selected to match
            your lifestyle.
          </p>
          <ul className="space-y-2 text-gray-600 list-disc  pl-5 ">
            <li> Wide range of summer essentials</li>
            <li> Affordable pricing</li>
            <li>Easy and secure checkout</li>
            <li>Responsive and modern design</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
