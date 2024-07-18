import Description from "@/components/Description";
import { z } from "zod";

export const emailsSchema = z.object({
    name: z.string().min(3, { message: "Must be 3 or more characters long" }),
    email: z.string().email({ message: "Invalid email address" }),
    description: z.string().min(16, { message: "Must be 16 or more characters long" }).max(155, { message: "Must be 155 or fewer characters long" })
});
