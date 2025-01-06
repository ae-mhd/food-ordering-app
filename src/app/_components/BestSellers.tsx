import MainHeading from "@/components/main-heading";
import Menu from "@/components/menu";
import React from "react";

function BestSellers() {
  const bestSellers = [
    {
      id: crypto.randomUUID(),
      name: "Pizza",
      description: "this is a pizza",
      basetPrice: 13,
      image: "/assets/images/pizza.png",
    },
    {
      id: crypto.randomUUID(),
      name: "Pizza",
      description: "this is a pizza",
      basetPrice: 13,
      image: "/assets/images/pizza.png",
    },
    {
      id: crypto.randomUUID(),
      name: "Pizza",
      description: "this is a pizza",
      basetPrice: 13,
      image: "/assets/images/pizza.png",
    },
    {
      id: crypto.randomUUID(),
      name: "Pizza",
      description: "this is a pizza",
      basetPrice: 13,
      image: "/assets/images/pizza.png",
    },
  ];
  return (
    <section className="section-gap">
      <div className="container">
        <div className="text-center mb-3">
          <MainHeading subTitle="checkout" title="Out Best Sellers" />
        </div>
        <Menu items={bestSellers} />
      </div>
    </section>
  );
}

export default BestSellers;
