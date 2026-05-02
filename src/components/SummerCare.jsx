import Image from "next/image";
import { Button, Card } from "@heroui/react";

const SummerCare = () => {
  return (
    <div className="w-full p-8 px-4 md:px-10 lg:px-20">
      <h1 className="text-3xl md:text-4xl font-bold text-center">
        Summer <span className="text-orange-400">Care</span> Tips
      </h1>

      <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 mt-7">
        {/* CARD 1 */}
        <Card className="lg:col-span-6 min-h-[220px] relative overflow-hidden rounded-3xl">
          <Image
            alt="hero banner"
            fill
            className="object-cover"
            priority
            src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&q=80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

          <div className="absolute inset-0 z-10 flex flex-col justify-between p-5 text-white">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">
                Protect Your <span className="text-orange-300">Skin</span>
              </h2>
              <ul className="mt-2 space-y-1 text-sm md:text-base text-white list-disc list-inside">
                <li>Use SPF 30+ sunscreen daily</li>
                <li>Wash your face twice a day</li>
                <li>Use gel-based moisturizer for oily skin</li>
              </ul>
            </div>

            <div className="flex items-center justify-end">
              <Button className="bg-white text-black " size="sm">
                More Tips
              </Button>
            </div>
          </div>
        </Card>

        {/* CARD 2 */}
        <Card className="lg:col-span-6 lg:row-span-2 min-h-[220px] relative overflow-hidden rounded-3xl">
          <Image
            alt="hero banner"
            fill
            className="object-cover"
            priority
            src="https://images.unsplash.com/photo-1523362628745-0c100150b504?w=800&q=80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

          <div className="absolute inset-0 z-10 flex flex-col justify-between p-5 text-white">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">Stay Hydrated</h2>
              <ul className="mt-2 space-y-1 text-sm md:text-base text-white list-disc list-inside">
                <li>Drink 8–10 glasses of water daily</li>
                <li>Carry a water bottle when going outside</li>
                <li>Include coconut water and fresh juices</li>
                <li>Avoid excessive caffeine and soft drinks</li>
              </ul>
            </div>

            <div className="flex items-center justify-end">
              <Button className="bg-white text-black " size="sm">
                More Tips
              </Button>
            </div>
          </div>
        </Card>

        {/* CARD 3 */}
        <Card className="lg:col-span-3 lg:row-span-2 min-h-[220px] relative overflow-hidden rounded-3xl">
          <Image
            alt="hero banner"
            fill
            className="object-cover"
            src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

          <div className="absolute inset-0 z-10 flex flex-col justify-between p-5 text-white">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">Healthy Food</h2>
              <ul className="mt-2 space-y-1 text-sm md:text-base text-white list-disc list-inside">
                <li>Eat seasonal fruits</li>
                <li>Drink plenty of water and natural juices</li>
                <li>Avoid oily, spicy, and heavy foods</li>
              </ul>
            </div>

            <div className="flex items-center justify-end">
              <Button className="bg-white text-black " size="sm">
                More Tips
              </Button>
            </div>
          </div>
        </Card>

        {/* CARD 4 */}
        <Card className="lg:col-span-3 lg:row-span-2 min-h-[220px] relative overflow-hidden rounded-3xl">
          <Image
            alt="hero banner"
            fill
            className="object-cover"
            src="https://images.unsplash.com/photo-1521335629791-ce4aec67dd15?w=800&q=80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

          <div className="absolute inset-0 z-10 flex flex-col justify-between p-5 text-white">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">Clothing</h2>
              <ul className="mt-2 space-y-1 text-sm md:text-base text-white list-disc list-inside">
                <li>Wear light cotton fabrics</li>
                <li>Choose loose-fitting clothes </li>
                <li>Wear sunglasses and hats </li>
              </ul>
            </div>

            <div className="flex items-center justify-end">
              <Button className="bg-white text-black " size="sm">
                More Tips
              </Button>
            </div>
          </div>
        </Card>

        {/* CARD 5 */}
        <Card className="lg:col-span-6 min-h-[220px] relative overflow-hidden rounded-3xl">
          <Image
            alt="hero banner"
            fill
            className="object-cover"
            src="https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=800"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

          <div className="absolute inset-0 z-10 flex flex-col justify-between p-5 text-white">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">Outdoor Safety</h2>
              <ul className="mt-2 space-y-1 text-sm md:text-base text-white list-disc list-inside">
                <li>Avoid direct sunlight from 11 AM to 3 PM</li>
                <li>Apply SPF 30+ sunscreen before going outside</li>
                <li>Stay hydrated with water or ORS</li>
                <li>Take breaks in shaded or cool areas</li>
              </ul>
            </div>

            <div className="flex items-center justify-end">
              <Button className="bg-white text-black " size="sm">
                More Tips
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SummerCare;
