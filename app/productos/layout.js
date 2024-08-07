import React from "react";
import ProductFilter from "../components/productFilter";

const layoutProductos = ({ children }) => {
  return (
    <div className="grid grid-rows-[60px_minmax(0,_1fr)]">
      <div className="row-start-2">
        <ProductFilter />

        {children}
      </div>
    </div>
  );
};

export default layoutProductos;
