import { Client } from 'pg'
 
const client = new Client({
  host: 'pg-10540c55-bsingharnav-37d6.g.aivencloud.com',
  port: 22524,
  database: 'defaultdb',
  user: 'avnadmin',
  password: 'AVNS_LaJ6KdHERlxEUMUHjGm',
})

client.connect()

async function createUsersTable(){
    

}