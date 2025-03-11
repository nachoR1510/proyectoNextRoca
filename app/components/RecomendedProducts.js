"use client";
import React, { useEffect, useState } from "react";
import Card from "./card";

const RecommendedProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const baseUrl =
        typeof window === "undefined"
          ? `http://${process.env.VERCEL_URL || "localhost:3000"}`
          : "";

      const data = await fetch(`${baseUrl}/api/productos/all`, {
        cache: "no-store",
      }).then((r) => r.json());

      const shuffled = data.sort(() => 0.5 - Math.random()).slice(0, 5);

      setProducts(shuffled);
    };

    fetchProducts();
  }, []);

  return (
    <div className="">
      <div className="flex gap-5">
        {products.map((product, index) => (
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

export default RecommendedProducts;
