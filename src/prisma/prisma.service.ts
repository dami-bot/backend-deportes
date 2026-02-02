import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  constructor() {
    // Si la variable de entorno no existe por un microsegundo, 
    // le pasamos un string para que el constructor no esté vacío.
    super({
      datasourceUrl: process.env.DATABASE_URL || '',
    });
  }

  async onModuleInit() {
    // Verificación manual en los logs de Railway
    if (!process.env.DATABASE_URL) {
      console.error('❌ ERROR CRÍTICO: DATABASE_URL no está definida en el sistema.');
    }
    
    try {
      await this.$connect();
      console.log('🚀 ¡Conexión exitosa a Supabase desde Railway!');
    } catch (error) {
      console.error('❌ Error al conectar a la base de datos:', error);
    }
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}