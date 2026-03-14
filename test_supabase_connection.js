
const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

// Read from .env.local.utf8
const envPath = path.join(__dirname, '.env.local.utf8');
const envContent = fs.readFileSync(envPath, 'utf8');

const supabaseUrlMatch = envContent.match(/NEXT_PUBLIC_SUPABASE_URL=(.*)/);
const supabaseAnonKeyMatch = envContent.match(/NEXT_PUBLIC_SUPABASE_ANON_KEY=(.*)/);

const supabaseUrl = supabaseUrlMatch ? supabaseUrlMatch[1].trim() : null;
const supabaseAnonKey = supabaseAnonKeyMatch ? supabaseAnonKeyMatch[1].trim() : null;

console.log('Supabase URL:', supabaseUrl);
// console.log('Supabase Key:', supabaseAnonKey); // Do not print secret key

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase credentials in .env.local.utf8');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function testConnection() {
  console.log('Testing Supabase connection...');
  try {
    const { data, error } = await supabase.from('questions').select('count', { count: 'exact', head: true });
    if (error) {
      console.error('Error connecting to Supabase (questions table):', error);
    } else {
      console.log('Successfully connected to Supabase! Questions table exists.');
    }
  } catch (err) {
    console.error('Unexpected error:', err);
  }

  console.log('Testing Auth Sign Up (dry run)...');
  const testEmail = `test_${Date.now()}@example.com`;
  const testPassword = 'password123';
  
  try {
    const { data, error } = await supabase.auth.signUp({
      email: testEmail,
      password: testPassword,
    });
    
    if (error) {
        console.error('Sign Up Error:', error);
    } else {
        console.log('Sign Up Successful for:', data.user?.email);
    }
  } catch (err) {
      console.error('Sign Up Unexpected Error:', err);
  }
}

testConnection();
