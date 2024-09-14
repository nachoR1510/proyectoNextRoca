"use client";
import React from "react";
import { useParams } from "next/navigation";
import ProductDetail from "@/app/components/productDetail";

const Product = async () => {
  const { product } = useParams();
  const data = await fetch(`http://localhost:3000/api/productos/all`, {
    cache: "no-store",
  }).then((r) => r.json());
  const filterData = data.filter(
    (item) => item.title.replace(/ /g, "") === product
  );
  return (
    <div>
      {filterData.map((product, index) => (
        <ProductDetail key={index} product={product} />
      ))}
    </div>
  );
};

export default Product;
