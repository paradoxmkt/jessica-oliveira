'use server';
/**
 * @fileOverview An AI style advisor that gives suggestions on how to optimize visual media to improve targeting strategies.
 *
 * - aiStyleAdvisor - A function that handles the style advising process.
 * - AiStyleAdvisorInput - The input type for the aiStyleAdvisor function.
 * - AiStyleAdvisorOutput - The return type for the aiStyleAdvisor function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiStyleAdvisorInputSchema = z.object({
  mediaDataUri: z
    .string()
    .describe(
      "A photo or video, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
  contentGoal: z.string().describe('The goal of the content (e.g., increase engagement, drive sales).'),
  targetAudience: z.string().describe('The target audience for the content.'),
});
export type AiStyleAdvisorInput = z.infer<typeof AiStyleAdvisorInputSchema>;

const AiStyleAdvisorOutputSchema = z.object({
  suggestions: z.string().describe('AI-powered suggestions on how to optimize the visual media.'),
});
export type AiStyleAdvisorOutput = z.infer<typeof AiStyleAdvisorOutputSchema>;

export async function aiStyleAdvisor(input: AiStyleAdvisorInput): Promise<AiStyleAdvisorOutput> {
  return aiStyleAdvisorFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiStyleAdvisorPrompt',
  input: {schema: AiStyleAdvisorInputSchema},
  output: {schema: AiStyleAdvisorOutputSchema},
  prompt: `You are an AI style advisor specializing in optimizing visual media for content goals.

You will use this information to provide suggestions on how to optimize the visual media to improve targeting strategies.

Content Goal: {{{contentGoal}}}
Target Audience: {{{targetAudience}}}
Media: {{media url=mediaDataUri}}`,
});

const aiStyleAdvisorFlow = ai.defineFlow(
  {
    name: 'aiStyleAdvisorFlow',
    inputSchema: AiStyleAdvisorInputSchema,
    outputSchema: AiStyleAdvisorOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
