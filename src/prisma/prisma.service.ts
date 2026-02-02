import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  constructor() {
    // Pasamos un objeto vacío pero 'tipado' como any para que el constructor
    // no se queje de estar vacío ni de las propiedades.
    super({} as any);
  }

  async onModuleInit() {
    // Si la variable no existe, Prisma usará la del .env por defecto.
    // Si existe (en Railway), la forzamos aquí:
    if (process.env.DATABASE_URL) {
      (this as any)._datasourceUrl = process.env.DATABASE_URL;
    }

    try {
      await this.$connect();
      console.log('🚀 ¡Sincronizado con Supabase!');
    } catch (error) {
      console.error('❌ Error de conexión:', error);
    }
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}