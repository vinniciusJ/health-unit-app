import { z } from "zod";

export const credentialsSchema = z.object({
    email: z.string().refine(data => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data), 'Por favor, informe um e-mail válido'),
    password: z.string().min(1, 'Senha inválida')
})

export type Credentials = z.input<typeof credentialsSchema>