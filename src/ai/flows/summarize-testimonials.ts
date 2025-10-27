'use server';

/**
 * @fileOverview Summarizes patient testimonials to highlight key benefits.
 *
 * - summarizeTestimonials - A function that summarizes a long testimonial into concise highlights.
 * - SummarizeTestimonialsInput - The input type for the summarizeTestimonials function.
 * - SummarizeTestimonialsOutput - The return type for the summarizeTestimonials function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeTestimonialsInputSchema = z.object({
  testimonial: z.string().describe('O texto completo do depoimento do paciente.'),
});

export type SummarizeTestimonialsInput = z.infer<typeof SummarizeTestimonialsInputSchema>;

const SummarizeTestimonialsOutputSchema = z.object({
  summary: z.string().describe('Um resumo conciso do depoimento, destacando os principais benefícios.'),
});

export type SummarizeTestimonialsOutput = z.infer<typeof SummarizeTestimonialsOutputSchema>;

export async function summarizeTestimonials(input: SummarizeTestimonialsInput): Promise<SummarizeTestimonialsOutput> {
  return summarizeTestimonialsFlow(input);
}

const summarizeTestimonialsPrompt = ai.definePrompt({
  name: 'summarizeTestimonialsPrompt',
  input: {schema: SummarizeTestimonialsInputSchema},
  output: {schema: SummarizeTestimonialsOutputSchema},
  prompt: `Resuma o seguinte depoimento de paciente, destacando os principais benefícios e aspectos positivos mencionados. Mantenha o resumo conciso e de fácil leitura.

Depoimento: {{{testimonial}}}`,
});

const summarizeTestimonialsFlow = ai.defineFlow(
  {
    name: 'summarizeTestimonialsFlow',
    inputSchema: SummarizeTestimonialsInputSchema,
    outputSchema: SummarizeTestimonialsOutputSchema,
  },
  async input => {
    if (!process.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY === 'YOUR_GEMINI_API_KEY') {
      const shortSummary = input.testimonial.split('.').slice(0, 2).join('.') + '.';
      return { summary: shortSummary };
    }
    const {output} = await summarizeTestimonialsPrompt(input);
    return output!;
  }
);
