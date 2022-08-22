import { config } from 'dotenv-defaults';

import { MongoClient } from 'mongodb';

config();
let conn;

const connect = async () => {
  const db = await new MongoClient(process.env.MONGO_SERVER_URL, {

  });

  if (!conn) conn = await db.connect();
  return conn;
};

const disconnect = async () => {
  if (conn) await conn.close();
};

export {
  connect,
  disconnect,
};
