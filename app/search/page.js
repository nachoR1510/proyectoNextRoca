"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Card from "../components/card";
import ProductFilter from "../components/productFilter";

const SearchPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchParams = useSearchParams();
  const query = searchParams.get("query");

  useEffect(() => {
    const fetchProducts = async () => {
      const baseUrl =
        typeof window === "undefined"
          ? `http://${process.env.VERCEL_URL || "localhost:3000"}`
          : "";
      const data = await fetch(`${baseUrl}/api/productos/all`, {
        cache: "no-store",
      }).then((r) => r.json());
      setProducts(data);
      setFilteredProducts(data);
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (query) {
      setSearchTerm(query);
    }
  }, [query]);

  useEffect(() => {
    const filtered = products.filter((product) => {
      return (
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.fabricante.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });

    setFilteredProducts(filtered);
  }, [searchTerm, products]);

  return (
    <div className="grid grid-cols-3">
      <div className="col-start-1 w-1/4 fixed mt-20 ml-20">
        <ProductFilter />
      </div>
      <div className="col-start-2 col-span-2 flex flex-wrap gap-5 mt-20 mb-10">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <Card
              key={index}
              title={product.title}
              price={product.price}
              img={product.img}
              category={product.category}
              fabricante={product.fabricante}
            />
          ))
        ) : (
          <div className="w-full flex items-center min-h-screen">
            <p className="text-white font-inter font-bold text-5xl text-center">
              No se encontraron productos.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
