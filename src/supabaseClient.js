import { createClient } from '@supabase/supabase-js'

// no need for hiding this variables
// because row level security is activated
// only reading data is accessible

const supabaseUrl = "https://okoaezanvsztnvblbfsf.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9rb2FlemFudnN6dG52YmxiZnNmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE1NTAwMDQsImV4cCI6MjAzNzEyNjAwNH0.uHF3Skc6-Zrjl_dafUu94DaFOg3ziT4rwrgAXrHXs1w"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)