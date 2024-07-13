import React from 'react'

export default function FormContact() {
  return (
    <form action={`https://formsubmit.co/9efc51a0977bd42aea6f47f733b25035 `} method='POST' className="max-w-4xl md:min-w-96 mb-4">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Nombre"
              name='name'
              className="bg-transparent w-full p-3 border rounded-md focus:outline-none focus:ring focus:border-slate-300"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name='email'
              placeholder="Correo electrónico"
              className="bg-transparent w-full p-3 border rounded-md focus:outline-none focus:ring focus:border-slate-300"
            />
          </div>
          <div className="mb-4">
            <textarea
            name='description'
              placeholder="Mensaje"
              className=" bg-transparent w-full p-3 border rounded-md focus:outline-none focus:ring focus:border-slate-300"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-slate-600 text-white py-2 px-4 rounded-full hover:bg-slate-700"
          >
            Enviar
          </button>
          <input type="hidden" name="_next" value="http://localhost:3000"></input>
          <input type="hidden" name="_captcha" value="false"></input>
        </form>
  )
}
