'use server';

/**
 * @fileOverview AI-powered copy generation for the homepage introduction. A Genkit flow which takes a
 * prompt as input, and returns marketing copy for the home page of the Abba Digital Physio clinic.
 *
 * @ExportedFunction generateHomePageCopy - Generates home page copy based on the given input.
 * @ExportedType GenerateHomePageCopyInput - The input type for the generateHomePageCopy function.
 * @ExportedType GenerateHomePageCopyOutput - The output type for the generateHomePageCopy function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateHomePageCopyInputSchema = z.object({
  prompt: z.string().describe('Um prompt descrevendo o texto desejado para a página inicial.'),
});
export type GenerateHomePageCopyInput = z.infer<
  typeof GenerateHomePageCopyInputSchema
>;

const GenerateHomePageCopyOutputSchema = z.object({
  copy: z.string().describe('O texto gerado para a página inicial.'),
});
export type GenerateHomePageCopyOutput = z.infer<
  typeof GenerateHomePageCopyOutputSchema
>;

export async function generateHomePageCopy(
  input: GenerateHomePageCopyInput
): Promise<GenerateHomePageCopyOutput> {
  return generateHomePageCopyFlow(input);
}

const generateHomePageCopyPrompt = ai.definePrompt({
  name: 'generateHomePageCopyPrompt',
  input: {schema: GenerateHomePageCopyInputSchema},
  output: {schema: GenerateHomePageCopyOutputSchema},
  prompt: `Você é um especialista em marketing especializado em criar textos envolventes para a página inicial de clínicas de fisioterapia. Gere uma introdução atraente para a página inicial com base no seguinte prompt: {{{prompt}}}.`,
});

const generateHomePageCopyFlow = ai.defineFlow(
  {
    name: 'generateHomePageCopyFlow',
    inputSchema: GenerateHomePageCopyInputSchema,
    outputSchema: GenerateHomePageCopyOutputSchema,
  },
  async input => {
    if (!process.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY === 'YOUR_GEMINI_API_KEY') {
      return { copy: "Bem-vindo à Abba Digital Physio.\n\nEstamos aqui para ajudá-lo em seu caminho para a recuperação e bem-estar. Nossa equipe de especialistas oferece cuidados personalizados para ajudá-lo a recuperar a mobilidade e a viver sem dor." };
    }
    const {output} = await generateHomePageCopyPrompt(input);
    return output!;
  }
);
