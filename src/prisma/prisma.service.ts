import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  constructor() {
    // Forzamos el uso de la variable de entorno directamente en el super
    super({
      datasources: {
        db: {
          url: process.env.DATABASE_URL,
        },
      },
    });
  }

  async onModuleInit() {
    try {
      await this.$connect();
      console.log('✅ Conexión a Supabase exitosa');
    } catch (error) {
      console.error('❌ Error al conectar a Supabase:', error);
    }
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}