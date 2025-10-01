import { MongoClient, Collection } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;
const DB_NAME = process.env.DB_NAME;

if (!MONGO_URI || !DB_NAME) {
  throw new Error("Las variables de entorno MONGO_URI y DB_NAME son requeridas.");
}

let client: MongoClient;

export async function connectDB(): Promise<Collection> {
  if (!client) {
    client = new MongoClient(MONGO_URI as string || "");
    await client.connect();
    console.log("MongoDB conectado correctamente. 🚀");
  }
  const db = client.db(DB_NAME);
  return db.collection("students");
}