import Image from "next/image";
import b1 from "@/assets/bannerimg/b1.jpg";
import { Button, Chip } from "@heroui/react";

export default function Banner() {
  return (
    <section
      className="relative w-full overflow-hidden h-[50vh] md:h-[80vh] lg:h-[80vh] isolate"
      //   style={{ height: "80vh", isolation: "isolate" }}
    >
      {/* Background Image */}
      <Image
        src={b1}
        alt="hero banner"
        fill
        sizes="100vw"
        className="object-cover object-center"
        style={{ zIndex: -1 }}
        priority
      />

      {/* Gradient */}
      <div className="absolute z-10 inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20" />

      {/* Content */}
      <div className="relative z-10 flex items-center h-full px-10 md:px-20 text-white sm:w-4xl ">
        <div>
          <Chip
            className="sm:text-xl  font-bold p-2 sm:px-4 mb-3"
            color="warning"
          >
            Hot Deals 🔥Summer Sale 50% OFF
          </Chip>

          <h1 className="text-4xl sm:text-6xl md:text-5xl font-bold">
            Stay Cool This Summer<br></br> with SunCart !
          </h1>
          <p className="mt-3">
            Discover trending summer essentials like sunglasses, outfits,
            skincare, and beach gear. Shop fast, stay stylish, and enjoy the
            season with exclusive deals made just for you.
          </p>
          <div className="space-x-3  mt-5">
            <Button className="bg-orange-500 text-white hover:bg-orange-600">
              Show Products
            </Button>
            <Button className="bg-orange-100 text-orange-600 hover:bg-orange-200">
              About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
