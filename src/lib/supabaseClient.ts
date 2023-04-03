import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://zpkmxymxvxfmlmtpqikb.supabase.co'
const SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpwa214eW14dnhmbWxtdHBxaWtiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA1NTIxMTcsImV4cCI6MTk5NjEyODExN30.E-nFexpIvhGpYyT-qfSvrbR1xHiT5JV2_oi7yyE90pM'

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

export default supabase
