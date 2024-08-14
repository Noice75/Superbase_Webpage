import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.0.5/+esm";
const supabaseUrl = "https://yoewyjpwivtgnxinmyxk.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlvZXd5anB3aXZ0Z254aW5teXhrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI5MjI1ODUsImV4cCI6MjAzODQ5ODU4NX0.U_hezyjMr4YrLtZ9xhFMsZvWZeInnC_UowQ826tKEoU";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
