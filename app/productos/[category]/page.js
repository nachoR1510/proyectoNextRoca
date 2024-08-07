"use client";
import React from "react";
import ProductList from "@/app/components/productList";
import mockData from "@/data/mockData";
import { useParams } from "next/navigation";

const tipo = () => {
  const { category } = useParams();
  const filterData =
    category === "all"
      ? mockData
      : mockData.filter((item) => item.category === category);

  return (
    <div>
      <ProductList category={"category"} data={filterData} />
    </div>
  );
};

export default tipo;
