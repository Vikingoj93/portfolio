import express, { Request, Response } from "express";
import { validationResult } from "express-validator";
import emailsSchema from "../validations/emailsSchema";
import { Email } from "../types/types";
import { Resend } from "resend";

const router = express.Router();

router.get("/", (_req, res) => {
  res.send("emails");
});

router.post("/", emailsSchema, async (req: Request, res: Response) => {
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
      html: `<html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        background-color: #f4f4f4;
                        margin: 0;
                        padding: 0;
                        -webkit-font-smoothing: antialiased;
                        -moz-osx-font-smoothing: grayscale;
                    }
                    .container {
                        width: 100%;
                        max-width: 600px;
                        margin: 0 auto;
                        padding: 20px;
                        background-color: #ffffff;
                        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                    }
                    .header {
                        background-color: #007bff;
                        color: #ffffff;
                        padding: 10px 0;
                        text-align: center;
                    }
                    .header h2 {
                        margin: 0;
                    }
                    .content {
                        padding: 20px;
                    }
                    .content p {
                        line-height: 1.6;
                        color: #333333;
                    }
                    .footer {
                        background-color: #007bff;
                        color: #ffffff;
                        text-align: center;
                        padding: 10px 0;
                        margin-top: 20px;
                    }
                    .footer p {
                        margin: 0;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h2>¡Nuevo mensaje recibido!</h2>
                    </div>
                    <div class="content">
                        <p><strong>Nombre:</strong> ${name}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Descripción:</strong> ${description}</p>
                    </div>
                    <div class="footer">
                        <p>© 2024 Tu Empresa. Todos los derechos reservados.</p>
                    </div>
                </div>
            </body>
            </html>`,
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
});

export default router;
