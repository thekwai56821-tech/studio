'use server';

/**
 * @fileOverview A flow that generates a Myanmar-themed UI theme based on a text prompt.
 *
 * - generateMyanmarTheme - A function that generates the UI theme.
 * - GenerateMyanmarThemeInput - The input type for the generateMyanmarTheme function.
 * - GenerateMyanmarThemeOutput - The return type for the generateMyanmarTheme function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateMyanmarThemeInputSchema = z.object({
  prompt: z.string().describe('A text prompt describing the type of Myanmar-themed application.'),
});
export type GenerateMyanmarThemeInput = z.infer<typeof GenerateMyanmarThemeInputSchema>;

const GenerateMyanmarThemeOutputSchema = z.object({
  theme: z
    .string()
    .describe(
      'A suggested UI theme (colors, typography, common UI patterns) that fits the description.'
    ),
});
export type GenerateMyanmarThemeOutput = z.infer<typeof GenerateMyanmarThemeOutputSchema>;

export async function generateMyanmarTheme(input: GenerateMyanmarThemeInput): Promise<GenerateMyanmarThemeOutput> {
  return generateMyanmarThemeFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateMyanmarThemePrompt',
  input: {schema: GenerateMyanmarThemeInputSchema},
  output: {schema: GenerateMyanmarThemeOutputSchema},
  prompt: `You are a UI/UX design expert specializing in Myanmar-themed applications. Based on the user's description, generate a UI theme including colors, typography, and common UI patterns.

Description: {{{prompt}}}`,
});

const generateMyanmarThemeFlow = ai.defineFlow(
  {
    name: 'generateMyanmarThemeFlow',
    inputSchema: GenerateMyanmarThemeInputSchema,
    outputSchema: GenerateMyanmarThemeOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
