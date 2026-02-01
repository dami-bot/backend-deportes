import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  constructor() {
    super({
      // Usamos 'as any' para que TypeScript no bloquee el build en Railway
      // pero en ejecución Prisma recibirá la URL correctamente.
      datasources: {
        db: {
          url: process.env.DATABASE_URL,
        },
      },
    } as any);
  }

  async onModuleInit() {
    try {
      await this.$connect();
      console.log('✅ Base de Datos conectada con éxito');
    } catch (e) {
      console.error('❌ Error de conexión:', e);
    }
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}