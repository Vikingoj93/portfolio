"use client ";
import React, { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { emailsSchema } from "@/app/validations/emailsSchema";
import { contextForm } from "../context/contextProvider";
import axios from "axios";

import { server } from "../config";

type Inputs = {
  name: string;
  email: string;
  description: string;
};

export default function FormContact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>({
    resolver: zodResolver(emailsSchema),
  });

  const { toggleShowForm } = useContext(contextForm);

  const onSubmit: SubmitHandler<Inputs> = async (data: object) => {
    try {
      if (errors.name || errors.description || errors.email) {
        return;
      }
      const email = data;
      const response = await axios.post(`${server}/api/emails`, email);

      console.log(response.data);
      reset();
      toggleShowForm(true);

      return;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-4xl md:min-w-96 mb-4"
    >
      <div className="mb-4">
        <input
          type="text"
          placeholder="Nombre"
          {...register("name")}
          className="bg-transparent w-full p-3 border rounded-md focus:outline-none focus:ring focus:border-slate-300"
        />
        {errors.name && (
          <p className="text-red-500 mt-1">{errors.name.message}</p>
        )}
      </div>
      <div className="mb-4">
        <input
          type="email"
          {...register("email")}
          placeholder="Correo electrónico"
          className="bg-transparent w-full p-3 border rounded-md focus:outline-none focus:ring focus:border-slate-300"
        />
        {errors.email && (
          <p className="text-red-500 mt-1">{errors.email.message}</p>
        )}
      </div>
      <div className="mb-4">
        <textarea
          placeholder="Mensaje"
          {...register("description")}
          className=" bg-transparent w-full p-3 border rounded-md focus:outline-none focus:ring focus:border-slate-300"
        ></textarea>
        {errors.description && (
          <p className="text-red-500 mt-1">{errors.description.message}</p>
        )}
      </div>
      <button
        type="submit"
        className="bg-slate-600 text-white py-2 px-4 rounded-full hover:bg-slate-700"
      >
        Enviar
      </button>
    </form>
  );
}
