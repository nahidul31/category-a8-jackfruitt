import Banner from "@/components/shared-page/homePage/Banner";
import ShowSomeProducts from "@/components/shared-page/homePage/ShowSomeProducts";
import { Button } from "@heroui/react";
export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <div className="container mx-auto px-5">
        <ShowSomeProducts></ShowSomeProducts>
      </div>
    </div>
  );
}
