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
  testimonial: z.string().describe('The full text of the patient testimonial.'),
});

export type SummarizeTestimonialsInput = z.infer<typeof SummarizeTestimonialsInputSchema>;

const SummarizeTestimonialsOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the testimonial highlighting key benefits.'),
});

export type SummarizeTestimonialsOutput = z.infer<typeof SummarizeTestimonialsOutputSchema>;

export async function summarizeTestimonials(input: SummarizeTestimonialsInput): Promise<SummarizeTestimonialsOutput> {
  return summarizeTestimonialsFlow(input);
}

const summarizeTestimonialsPrompt = ai.definePrompt({
  name: 'summarizeTestimonialsPrompt',
  input: {schema: SummarizeTestimonialsInputSchema},
  output: {schema: SummarizeTestimonialsOutputSchema},
  prompt: `Summarize the following patient testimonial, highlighting the key benefits and positive aspects mentioned. Keep the summary concise and easy to read.

Testimonial: {{{testimonial}}}`,
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
