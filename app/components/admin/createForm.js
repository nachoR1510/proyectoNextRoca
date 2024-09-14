"use client";
import React from "react";
import { useState } from "react";
import Button from "../button";
import { doc, setDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "@/app/firebase/config";

const createProduct = async (values, file) => {
  const docName = `${values.category}-${values.fabricante}-${values.title}`;
  const docRef = doc(db, "productos", docName);
  return setDoc(docRef, { ...values, img: values.img });
};

const CreateForm = () => {
  const [values, setValues] = useState({
    title: "",
    price: 0,
    fabricante: "",
    description: "",
    category: "",
    img: null,
  });

  const handleImageChange = async (e) => {
    const storageRef = ref(storage, values.title);

    const fileSnapshot = await uploadBytes(storageRef, e.target.files[0]);

    const fileURL = await getDownloadURL(fileSnapshot.ref);

    setValues({ ...values, img: fileURL });
  };

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSumbit = async (e) => {
    e.preventDefault();
    await createProduct(values);
  };

  return (
    <div className="container m-auto pt-10 max-w-lg text-white">
      <form onSubmit={handleSumbit} className="my-12">
        <label>Nombre: </label>
        <input
          type="text"
          value={values.title}
          required
          className="p-2 rounded w-full border border-blue-100 block my-4 bg-white text-black"
          name="title"
          onChange={handleChange}
        />

        <label>imagen: </label>
        <input
          type="file"
          required
          className="p-2 rounded w-full border border-blue-100 block my-4 bg-white text-black"
          name="img"
          onChange={handleImageChange}
        />

        <label>Precio: </label>
        <input
          type="number"
          value={values.price}
          required
          className="p-2 rounded w-full border border-blue-100 block my-4 bg-white text-black"
          name="price"
          onChange={handleChange}
        />

        <label>categoria: </label>
        <input
          type="text"
          value={values.category}
          required
          className="p-2 rounded w-full border border-blue-100 block my-4 bg-white text-black"
          name="category"
          onChange={handleChange}
        />

        <label>fabricante: </label>
        <input
          type="text"
          value={values.fabricante}
          required
          className="p-2 rounded w-full border border-blue-100 block my-4 bg-white text-black"
          name="fabricante"
          onChange={handleChange}
        />

        <label>descripcion: </label>
        <input
          type="text"
          value={values.description}
          required
          className="p-2 rounded w-full border border-blue-100 block my-4 bg-white text-black"
          name="description"
          onChange={handleChange}
        />

        <Button
          type="sumbit"
          className="bg-white text-black text-xl p-2 font-urban"
        >
          Crear
        </Button>
      </form>
    </div>
  );
};

export default CreateForm;
