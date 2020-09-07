import 'reflect-metadata';
import { createSchema } from '../graphql/schema';

const saveSchema = async () => {
  await createSchema();
};

saveSchema();
