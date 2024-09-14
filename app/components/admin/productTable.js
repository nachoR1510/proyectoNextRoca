import React from "react";
import Image from "next/image";
import DeleteProductBtn from "./delateProductBtn";

const productTable = async () => {
  const items = await fetch("http://localhost:3000/api/productos/all", {
    cache: "no-store",
  }).then((r) => r.json());

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-xs text-left text-white">
        <thead className="text-xs text-gray-700 uppercase">
          <tr>
            <th scope="col" className="px-3 py-2">
              Nombre
            </th>
            <th scope="col" className="px-3 py-2">
              Precio
            </th>
            <th scope="col" className="px-3 py-2">
              Fabricante
            </th>
            <th scope="col" className="px-3 py-2">
              categoria
            </th>
            <th scope="col" className="px-3 py-2">
              imagen
            </th>
            <th scope="col" className="px-3 py-2">
              descripcion
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td className="p-2">{item.title}</td>
              <td className="p-2">{item.price}</td>
              <td className="p-2">{item.fabricante}</td>
              <td className="p-2">{item.category}</td>
              <td className="p-2">
                {" "}
                <Image src={item.img} alt={item.title} width={80} height={80} />
              </td>
              <td className="p-2">{item.description}</td>
              <td className="p-2">
                {" "}
                <DeleteProductBtn
                  title={item.title}
                  fabricante={item.fabricante}
                  category={item.category}
                ></DeleteProductBtn>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default productTable;
