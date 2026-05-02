// components/TopBrands.jsx
import Image from "next/image";

const brands = [
  {
    id: 1,
    name: "Neutrogena",
    tag: "Skincare",
    badge: "Best Seller",
    domain: "neutrogena.com",
    img: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&q=80",
  },
  {
    id: 2,
    name: "Ray-Ban",
    tag: "Sunglasses",
    badge: "Trending",
    domain: "ray-ban.com",
    img: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&q=80",
  },
  {
    id: 3,
    name: "Nivea",
    tag: "Skin Care",
    badge: "Top Rated",
    domain: "nivea.com",
    img: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&q=80",
  },
  {
    id: 4,
    name: "H&M",
    tag: "Summer Clothing",
    badge: "New Arrival",
    domain: "hm.com",
    img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&q=80",
  },
  {
    id: 5,
    name: "Banana Boat",
    tag: "Sun Care",
    badge: "Popular",
    domain: "bananaboat.com",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80",
  },
  {
    id: 6,
    name: "Cetaphil",
    tag: "Sensitive Skin",
    badge: "Derm Pick",
    domain: "cetaphil.com",
    img: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&q=80",
  },
  {
    id: 7,
    name: "Zara",
    tag: "Fashion",
    badge: "Trending",
    domain: "zara.com",
    img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&q=80",
  },
  {
    id: 8,
    name: "Oakley",
    tag: "Sports Eyewear",
    badge: "Editor Pick",
    domain: "oakley.com",
    img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&q=80",
  },
];

export default function TopBrands() {
  return (
    <section className="bg-orange-50 px-7 py-10 mb-14 rounded-2xl mt-10">
      <div className="flex items-end justify-between mb-6">
        <div>
          <h2 className="text-3xl font-bold text-orange-950">Top Brands</h2>
          <p className=" text-xs text-orange-700 opacity-70 mt-1">
            Trusted by thousands of summer lovers
          </p>
        </div>
        <a
          href="#"
          className="text-xs text-orange-600 border-b border-orange-300"
        >
          View all →
        </a>
      </div>

      {/* Cards ---------*/}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {brands.map((b) => (
          <div
            key={b.id}
            className="bg-white border border-orange-100 rounded-2xl overflow-hidden hover:-translate-y-1 hover:border-orange-300 transition-all duration-200 cursor-pointer"
          >
            <div className="relative w-full h-28">
              <Image src={b.img} alt={b.name} fill className="object-cover" />
            </div>

            <div className="p-3">
              <div className="flex items-center justify-between mb-2">
                <div className="relative w-8 h-8 rounded-full border border-orange-100 bg-white overflow-hidden flex-shrink-0"></div>

                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-800">
                  {b.badge}
                </span>
              </div>

              <p className="text-sm font-semibold text-orange-950">{b.name}</p>
              <p className="text-xs text-orange-700 opacity-60 mt-0.5">
                {b.tag}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
