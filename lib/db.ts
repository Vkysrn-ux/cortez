// lib/db.ts
import mysql from "mysql2/promise"

export const db = mysql.createPool({
  host: "147.93.155.21",     // your DB host
  user: "root",          // your DB user
  password: "Mind56nh360", // your DB password
  database: "cortez",    // your DB name
})
