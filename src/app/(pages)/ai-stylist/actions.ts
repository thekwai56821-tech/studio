'use server'

import {
  generateComponentVariation,
  type GenerateComponentVariationInput,
  type GenerateComponentVariationOutput,
} from '@/ai/flows/generate-component-variation'
import { z } from 'zod'

const inputSchema = z.object({
  componentType: z.string(),
  baseStyle: z.string(),
})

export async function generateStyleVariations(
  input: GenerateComponentVariationInput
): Promise<GenerateComponentVariationOutput> {
  const validatedInput = inputSchema.parse(input)
  try {
    const result = await generateComponentVariation(validatedInput)
    return result
  } catch (error) {
    console.error('Error in generateComponentVariation flow:', error);
    throw new Error('Failed to generate styles from AI.');
  }
}
