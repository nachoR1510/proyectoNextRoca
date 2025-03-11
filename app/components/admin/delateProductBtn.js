"use client";
import { db } from "@/app/firebase/config";
import { deleteDoc, doc } from "firebase/firestore";
import Image from "next/image";
import Swal from "sweetalert2";

const DeleteProductBtn = ({ title, fabricante, category }) => {
  const docName = `${category}-${fabricante}-${title}`;
  const deleteProduct = () => {
    Swal.fire({
      icon: "warning",
      title: "¿Quieres borrar este producto?",
      text: "Una vez eliminado no podra recuperarse",
      confirmButtonText: "Eliminar",
      confirmButtonColor: "#d90429",

      showCancelButton: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: "success",
          title: "Eliminado",
          text: "El producto fue borrado con exito.",
          iconColor: "#457b9d",
          timer: 2500,
          timerProgressBar: true,
          showConfirmButton: false,
        });
        try {
          await deleteDoc(doc(db, "productos", docName));
        } catch (error) {
          console.error("Error deleting product:", error);
        }
      }
    });
  };

  return (
    <button onClick={deleteProduct}>
      <Image alt="imgTacho" src={"/trash-icon.svg"} width={80} height={80} />
    </button>
  );
};

export default DeleteProductBtn;
