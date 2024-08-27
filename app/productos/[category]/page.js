import React from "react";
import ProductList from "@/app/components/productList";

export async function generateMetadata({ params, searchParams }, parent) {
  return {
    title: `proyectoNextRoca - ${params.category}`,
  };
}

export function generateStaticParams() {
  return [
    { category: "all" },
    { category: "mouse" },
    { category: "teclado" },
    { category: "auriculares" },
  ];
}

export const revalidate = 3600;

const tipo = ({ params }) => {
  const { category } = params;

  return (
    <div>
      <ProductList category={category} />
    </div>
  );
};

export default tipo;
