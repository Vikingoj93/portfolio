import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { Email } from "../types/types";
import { Resend } from "resend";
import crearEmail from "../libs/crearEmail";


export async function enviarMails(req: Request, res: Response) {
    try {
      const errors = validationResult(req);
  
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
      const { name, email, description } = req.body as Email;
  
      const resend = new Resend(`re_HzMV9PHR_LGQeCRdneNazVQwSN7CMzv1x`);
  
      const { data, error } = await resend.emails.send({
        from: "Acme <onboarding@resend.dev>",
        to: ["arturojesus.pc@gmail.com"],
        subject: "Hola Arturo",
        html: crearEmail(name, email, description),
      });
  
      if (error) {
        return res.status(400).json({ error });
      }
  
      console.log(data);
  
      return res.status(200).json({ message: "data received successfully" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "internal server error" });
    }
  }