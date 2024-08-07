import React from "react";
import Card from "./card";
import Link from "next/link";

const productList = ({ data, category }) => {
  return (
    <div className="flex flex-wrap justify-center item-center gap-5">
      {data.map((product, index) => (
        <Link href={`/productPage/${product.title.replace(/ /g, "")}`}>
          <Card
            key={index}
            title={product.title}
            price={product.price}
            img={product.img}
            category={product.category}
          />
        </Link>
      ))}
    </div>
  );
};

export default productList;
