"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import ProductDetail from "@/app/components/productDetail";

const Product = () => {
  const { product } = useParams();
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`/api/productos/all`, {
        cache: "no-store",
      }).then((r) => r.json());
      const filtered = data.filter(
        (item) => item.title.replace(/ /g, "") === product
      );
      setFilterData(filtered);
    };

    fetchData();
  }, [product]);

  return (
    <div>
      {filterData.map((product, index) => (
        <ProductDetail key={index} product={product} />
      ))}
    </div>
  );
};

export default Product;
