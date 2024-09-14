import React from "react";
import Card from "./card";

const productList = async ({ category }) => {
  const data = await fetch(`/api/productos/${category}`, {
    cache: "no-store",
  }).then((r) => r.json());

  return (
    <div className="flex flex-wrap justify-center item-center gap-5">
      {data.map((product, index) => (
        <Card
          key={index}
          title={product.title}
          price={product.price}
          img={product.img}
          category={product.category}
        />
      ))}
    </div>
  );
};

export default productList;
