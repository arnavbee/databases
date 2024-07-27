import { Client } from 'pg';

async function insertData() {
  const client = new Client({
   connectionString: "postgres://avnadmin:AVNS_LaJ6KdHERlxEUMUHjGm@pg-10540c55-bsingharnav-37d6.g.aivencloud.com:22524/defaultdb?sslmode=require",
  });

  try {
    await client.connect(); // Ensure client connection is established
    const insertQuery = "INSERT INTO users (username, email, password) VALUES ('username2', 'user3@example.com', 'user_password');";
    const res = await client.query(insertQuery);
    console.log('Insertion success:', res); // Output insertion result
  } catch (err) {
    console.error('Error during the insertion:', err);
  } finally {
    await client.end(); // Close the client connection
  }
}

insertData();