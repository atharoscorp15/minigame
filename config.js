// config.js
const SUPABASE_URL = "https://zlehyddlqogzxwmwbbga.supabase.co";   // Ganti dengan URL Supabase-mu
const SUPABASE_ANON_KEY = "sb_publishable_2Qad2gug9wg5eayjVUOViw_afc51fS3";       // Ganti dengan Anon Key-mu

// Inisialisasi Supabase client dan simpan ke window.supabase
window.supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Optional: verifikasi
console.log("Supabase client ready:", window.supabase);