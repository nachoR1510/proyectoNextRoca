import React from "react";
import Card from "./card";
import ProductFilter from "../components/productFilter";

const productList = async ({ category }) => {
  const baseUrl =
    typeof window === "undefined"
      ? `http://${process.env.VERCEL_URL || "localhost:3000"}`
      : "";

  const data = await fetch(`${baseUrl}/api/productos/${category}`, {
    cache: "no-store",
  }).then((r) => r.json());

  return (
    <div className="grid grid-cols-3">
      <div className="col-start-1 w-1/4 fixed mt-20 ml-20">
        <ProductFilter />
      </div>
      <div className="col-start-2 col-span-2 flex flex-wrap gap-5 mt-20 mb-10">
        {data.map((product, index) => (
          <Card
            key={index}
            title={product.title}
            price={product.price}
            img={product.img}
            category={product.category}
            fabricante={product.fabricante}
          />
        ))}
      </div>
    </div>
  );
};

export default productList;
