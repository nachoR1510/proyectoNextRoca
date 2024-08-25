import React from "react";
import ProductList from "@/app/components/productList";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/app/firebase/config";

const getProducts = async (category) => {
  try {
    const productosRef = collection(db, "productos");
    let q;
    if (category === "all") {
      q = query(productosRef);
    } else {
      q = query(productosRef, where("category", "==", category));
    }
    const querySnapshot = await getDocs(q);
    const docs = querySnapshot.docs.map((doc) => doc.data());
    return docs;
  } catch (error) {}
};

const tipo = async ({ params }) => {
  const { category } = params;
  const data = await getProducts(category);
  return (
    <div>
      <ProductList category={category} data={data} />
    </div>
  );
};

export default tipo;
