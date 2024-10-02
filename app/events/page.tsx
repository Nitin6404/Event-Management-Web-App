import { createClient } from '@/utils/supabase/server'

export default async function Page() {
  const supabase = createClient()
  const { data: events } = await supabase.from('event').select()
  console.log(`Data is ${events}`)

  return <pre>{JSON.stringify(events, null, 2)}</pre>
}