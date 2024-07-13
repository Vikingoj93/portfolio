import Link from "next/link";
import { useState, useContext } from "react";
import { Instagram, GitHub, Mail, Linkedin } from "react-feather";
import dynamic from "next/dynamic";
import { contextTheme } from "@/context/contextProvider";

export default function Contact() {

  const {dark} = useContext(contextTheme)

  const styles = {
    link: "transition-transform duration-200 ease-out hover:scale-125",
  };

  const [showForm, setShowForm] = useState<boolean>(false)

  const toggleForm = ()=>{
    setShowForm(!showForm)
  }

  const FormContact = dynamic(()=> import('@/components/FormContact'), {
    loading: ()=> <p>Loading...</p>
  })

  

  return (
    <section id="contact">
      <div className="container mx-auto text-center flex justify-center items-center flex-col px-2">
        <h2 className="text-2xl font-bold mb-8">Contacto</h2>
        { showForm && <FormContact/> }
        
        <div className={`flex justify-around container flex-row `}>
          <div className="grid grid-cols-4 ">
            <Link href={'https://www.instagram.com/arturoj_93?igsh=amZ3emw0bnkweW96'} target="_blank" className={` mx-3 ${styles.link}`}>
              <Instagram  />
            </Link>
            <Link href={'https://github.com/Vikingoj93'} target="_blank" className={` mx-3 ${styles.link}`}>
              <GitHub />
            </Link>
            <button onClick={
              ()=> toggleForm()
            } className={` mx-3 ${styles.link}`}>
              <Mail />
            </button>
            <Link href={'https://linkedin.com/in/arturoj93'} target="_blank" className={` mx-3 ${styles.link}`}>
              <Linkedin />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
