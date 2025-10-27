'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating service descriptions for physiotherapy services.
 *
 * generateServiceDescriptions - An async function that takes a service name and generates a description for it.
 * GenerateServiceDescriptionsInput - The input type for the generateServiceDescriptions function.
 * GenerateServiceDescriptionsOutput - The output type for the generateServiceDescriptions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateServiceDescriptionsInputSchema = z.object({
  serviceName: z.string().describe('O nome do serviço de fisioterapia.'),
});
export type GenerateServiceDescriptionsInput = z.infer<typeof GenerateServiceDescriptionsInputSchema>;

const GenerateServiceDescriptionsOutputSchema = z.object({
  serviceDescription: z.string().describe('Uma descrição atraente do serviço de fisioterapia.'),
});
export type GenerateServiceDescriptionsOutput = z.infer<typeof GenerateServiceDescriptionsOutputSchema>;

export async function generateServiceDescriptions(input: GenerateServiceDescriptionsInput): Promise<GenerateServiceDescriptionsOutput> {
  return generateServiceDescriptionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateServiceDescriptionsPrompt',
  input: {schema: GenerateServiceDescriptionsInputSchema},
  output: {schema: GenerateServiceDescriptionsOutputSchema},
  prompt: `Você é um especialista em marketing para uma clínica de fisioterapia. Gere uma descrição atraente e informativa para o seguinte serviço: {{{serviceName}}}. A descrição deve ter aproximadamente 100-150 palavras. Foque nos benefícios para o paciente e use uma linguagem de fácil compreensão. Destaque como este serviço pode melhorar sua qualidade de vida e bem-estar geral.`,
});

const generateServiceDescriptionsFlow = ai.defineFlow(
  {
    name: 'generateServiceDescriptionsFlow',
    inputSchema: GenerateServiceDescriptionsInputSchema,
    outputSchema: GenerateServiceDescriptionsOutputSchema,
  },
  async input => {
     if (!process.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY === 'YOUR_GEMINI_API_KEY') {
      return { serviceDescription: `Nosso serviço de ${input.serviceName} foi projetado para fornecer a mais alta qualidade de atendimento. Focamos em tratamentos baseados em evidências para ajudá-lo a alcançar seus objetivos e melhorar seu bem-estar.` };
    }
    const {output} = await prompt(input);
    return output!;
  }
);
