import dotenv from 'dotenv';
import { ConnectionOptions } from 'typeorm';
dotenv.config();

module.exports = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: false,
  logging: false,
  entities: ['db/entity/**/*.ts'],
  migrations: ['db/migration/*.ts'],
  cli: {
    entitiesDir: 'db/entity',
    migrationsDir: 'db/migration',
  },
} as ConnectionOptions;
