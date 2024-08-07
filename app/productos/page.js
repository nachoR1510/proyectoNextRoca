"use client";
import React from "react";
import ProductList from "../components/productList";
import mockData from "@/data/mockData";
import Image from "next/image";
import Link from "next/link";

const productos = () => {
  return (
    <div>
      <div>
        <ProductList category={"all"} data={mockData} />
      </div>
    </div>
  );
};

export default productos;
