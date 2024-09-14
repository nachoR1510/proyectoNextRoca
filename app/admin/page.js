import React from "react";
import ProductTable from "../components/admin/productTable";
import LogoutButton from "../components/admin/LogoutButton";
import Button from "../components/button";
import Link from "next/link";

const page = () => {
  return (
    <div className="container m-auto pt-24">
      <div className="flex gap-5">
        <h1 className="text-white text-xl">Administracion</h1>
        <Link href={"/admin/create"}>
          <Button className="bg-green-500 p-2 text-white rounded">
            Añadir
          </Button>
        </Link>
        <LogoutButton />
      </div>
      <ProductTable />
    </div>
  );
};

export default page;
