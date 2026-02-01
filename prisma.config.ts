// prisma.config.ts
import { defineConfig } from '@prisma/config'; // Asegúrate de que apunte a @prisma/cli o el paquete de config
import * as dotenv from 'dotenv';

dotenv.config();

export default {
  datasource: {
    url: process.env.DATABASE_URL,
  },
  migrations: {
    seed: 'ts-node ./prisma/seed.ts',
  },
}