import Link from "next/link";
import { useContext } from "react";
import { contextTheme } from "@/context/contextProvider";

const Proyectos: React.FC = () => {
  const {dark} = useContext(contextTheme)
  const proyectos = [
    {
      nombre: "proyecto 1",
      descripcion: "",
      image: "https://i.postimg.cc/D0tgKV3W/Untitled-design.png",
      url: "",
    },
    {
      nombre: "proyecto 2",
      descripcion: "",
      image: "https://i.postimg.cc/D0tgKV3W/Untitled-design.png",
      url: "",
    },
    {
      nombre: " proyecto 3",
      descripcion: "",
      image: "https://i.postimg.cc/D0tgKV3W/Untitled-design.png",
      url: "",
    },
  ];


  return (

    <section id="projects" className="p-8">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-12">Mi Portafolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {proyectos.map((proyecto, index) => (
            <Link href={'#'}
              key={index}
              className={` ${dark ? 'hover:shadow-gray-300' : 'hover:shadow-slate-500'
              } shadow-md border rounded-lg overflow-hidden min-h-60 min-w-60 boder box-border`}
              
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {proyecto.nombre}
                </h3>
                <p className="text-gray-700">{proyecto.descripcion}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Proyectos;
