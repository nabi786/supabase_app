// Import the Supabase client
const { createClient } = require('@supabase/supabase-js')

console.log(process.env.supa_base_url)
console.log(process.env.SUPABASE_KEY)
// Create a Supabase client instance
const supabase = createClient("https://myxiklaowgdbpvlonfkf.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im15eGlrbGFvd2dkYnB2bG9uZmtmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg5NjcwNTcsImV4cCI6MjAwNDU0MzA1N30.umgHrpJNTXDfMfIGFTJL57QNMlmx16o5y32cglIrz2E", {
    auth: {
        persistSession: false
    }
  })






module.exports = supabase