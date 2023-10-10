const { createClient } = require("@supabase/supabase-js");

const supabaseURL = import.meta.env.SUPABASE_URL;
const supabaseKey = import.meta.env.SUPABASE_KEYS;

const supabase = createClient(supabaseURL, supabaseKey);