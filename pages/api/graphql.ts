import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-micro';
import { NextApiRequest, NextApiResponse } from 'next';
import { createSchema } from 'graphql/schema';
import { Connection, createConnection, getConnectionManager } from 'typeorm';
import dotenv from 'dotenv';
import { ShirtEntity } from 'db/entity/ShirtEntity';
import { ProductEntity } from 'db/entity/ProductEntity';
import { PantsEntity } from 'db/entity/PantsEntity';
dotenv.config();

let apolloServer: ApolloServer;

// eslint-disable-next-line
let apolloHandler: (req: any, res: any) => Promise<void>;

let connection: Connection;

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  if (!apolloServer) {
    const schema = await createSchema();
    apolloServer = new ApolloServer({ schema });
    apolloHandler = apolloServer.createHandler({ path: '/api/graphql' });
  }
  if (!connection) {
    const initConnection = async () =>
      await createConnection({
        type: 'mysql',
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT),
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        entities: [ProductEntity, ShirtEntity, PantsEntity],
      });
    try {
      connection = await initConnection();
    } catch (e) {
      if (e.name === 'AlreadyHasActiveConnectionError') {
        connection = getConnectionManager().get('default');
        await connection.close();
        connection = await initConnection();
      } else {
        throw e;
      }
    }
  }
  return await apolloHandler(req, res);
};
