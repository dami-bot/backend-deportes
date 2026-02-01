import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  constructor() {
    // Llamamos al constructor vacío para que no tire error de validación
    super();
  }

  async onModuleInit() {
    // Forzamos la URL de Railway/Supabase directamente en la configuración interna
    // antes de hacer el connect.
    (this as any)._activeDatasources = {
      db: { url: process.env.DATABASE_URL }
    };

    try {
      await this.$connect();
      console.log('✅ ¡CONECTADO A SUPABASE EXITOSAMENTE!');
    } catch (error) {
      console.error('❌ Error al conectar:', error);
    }
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}