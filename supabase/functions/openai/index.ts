// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

import 'https://deno.land/x/xhr@0.3.0/mod.ts'
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { Configuration, OpenAIApi } from 'https://esm.sh/openai@3.2.1'
import { corsHeaders } from '../_shared/cors.ts'

const configuration = new Configuration({
  organization: 'org-LK5uxxrRktinLeAfu6P6iLRH',
  apiKey: Deno.env.get('OPENAI_API_KEY')
})
const openai = new OpenAIApi(configuration)

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  const { query } = await req.json()

  const completion = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    temperature: 0.7,
    messages: [
      {
        role: 'system',
        content:
          'You are a helpful assistant and a successful psychologist who knows everything about psychoanalysis, that interprets dreams. You only reply with the interpretation of the dream and nothing else. Imagine that you are a psychoanalyst. Also explain the different symbols and their meaning. Also create a "tags" array at the end of the response that summarizes the dream that uses exactly this format "["tag1", "tag2", "tag3"]" with 3-5 tags. Also create a "title" for the dream. Start the interpretation with "Title:" followed by "Interpretation:" and the "Tags:"'
      },
      { role: 'user', content: query }
    ]
  })

  const interpretation = completion?.data?.choices[0]?.message?.content

  return new Response(JSON.stringify({ interpretation }), {
    headers: { ...corsHeaders, 'Content-Type': 'application/json' }
  })
})

// To invoke:
// curl -i --location --request POST 'http://localhost:54321/functions/v1/' \
//   --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
//   --header 'Content-Type: application/json' \
//   --data '{"name":"Functions"}'
