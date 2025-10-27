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
  serviceName: z.string().describe('The name of the physiotherapy service.'),
});
export type GenerateServiceDescriptionsInput = z.infer<typeof GenerateServiceDescriptionsInputSchema>;

const GenerateServiceDescriptionsOutputSchema = z.object({
  serviceDescription: z.string().describe('A compelling description of the physiotherapy service.'),
});
export type GenerateServiceDescriptionsOutput = z.infer<typeof GenerateServiceDescriptionsOutputSchema>;

export async function generateServiceDescriptions(input: GenerateServiceDescriptionsInput): Promise<GenerateServiceDescriptionsOutput> {
  return generateServiceDescriptionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateServiceDescriptionsPrompt',
  input: {schema: GenerateServiceDescriptionsInputSchema},
  output: {schema: GenerateServiceDescriptionsOutputSchema},
  prompt: `You are a marketing expert for a physiotherapy clinic. Generate a compelling and informative description for the following service: {{{serviceName}}}. The description should be approximately 100-150 words. Focus on the benefits to the patient and use language that is easy to understand. Highlight how this service can improve their quality of life and overall well-being.`,
});

const generateServiceDescriptionsFlow = ai.defineFlow(
  {
    name: 'generateServiceDescriptionsFlow',
    inputSchema: GenerateServiceDescriptionsInputSchema,
    outputSchema: GenerateServiceDescriptionsOutputSchema,
  },
  async input => {
     if (!process.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY === 'YOUR_GEMINI_API_KEY') {
      return { serviceDescription: `Our ${input.serviceName} service is designed to provide the highest quality of care. We focus on evidence-based treatments to help you achieve your goals and improve your well-being.` };
    }
    const {output} = await prompt(input);
    return output!;
  }
);
