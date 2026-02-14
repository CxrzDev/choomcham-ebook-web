import { createClient } from '@supabase/supabase-js'

// ใช้ environment variables กับ fallback
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://bnlwuyxjihhsahtjeupc.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJubHd1eXhqaWhoc2FodGpldXBjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA4NTIxNzcsImV4cCI6MjA4NjQyODE3N30.mTIDQcq6YIBs2CnJI4bpZPsQYFy96IAGi_9V_kD17eo'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)