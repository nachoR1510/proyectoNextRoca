"use client";
import React from "react";
import mockData from "@/data/mockData";
import { useParams } from "next/navigation";
import ProductDetail from "@/app/components/productDetail";

const product = () => {
  const { product } = useParams();
  const filterData = mockData.filter(
    (item) => item.title.replace(/ /g, "") === product
  );
  return (
    <div className="grid grid-rows-[60px_minmax(0,_1fr)] pt-5">
      <div className="row-start-2 flex justify-center ">
        {filterData.map((product, index) => (
          <ProductDetail
            key={index}
            title={product.title}
            price={product.price}
            img={product.img}
            category={product.category}
            description={product.description}
          />
        ))}
      </div>
    </div>
  );
};

export default product;
