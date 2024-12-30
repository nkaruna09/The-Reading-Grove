const { Client } = require('pg');

// Load environment variables from .env file
require('dotenv').config();

const client = new Client({
  connectionString: process.env.DATABASE_URL, // Replace with your actual connection string
});

client.connect()
  .then(() => console.log('Connected to PostgreSQL database'))
  .catch(err => console.error('Error connecting to the database:', err.stack));

module.exports = client;
