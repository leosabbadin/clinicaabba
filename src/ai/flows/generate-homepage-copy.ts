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
  prompt: z.string().describe('A prompt describing the desired homepage copy.'),
});
export type GenerateHomePageCopyInput = z.infer<
  typeof GenerateHomePageCopyInputSchema
>;

const GenerateHomePageCopyOutputSchema = z.object({
  copy: z.string().describe('The generated homepage copy.'),
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
  prompt: `You are a marketing expert specializing in creating engaging homepage copy for physiotherapy clinics. Generate compelling homepage introduction copy based on the following prompt: {{{prompt}}}.`,
});

const generateHomePageCopyFlow = ai.defineFlow(
  {
    name: 'generateHomePageCopyFlow',
    inputSchema: GenerateHomePageCopyInputSchema,
    outputSchema: GenerateHomePageCopyOutputSchema,
  },
  async input => {
    if (!process.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY === 'YOUR_GEMINI_API_KEY') {
      return { copy: "Welcome to Abba Digital Physio. We're here to help you on your path to recovery and wellness. Our expert team provides personalized care to help you regain mobility and live pain-free." };
    }
    const {output} = await generateHomePageCopyPrompt(input);
    return output!;
  }
);
