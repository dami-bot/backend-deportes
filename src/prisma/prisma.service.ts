import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  // ELIMINAMOS EL CONSTRUCTOR. 
  // Al no haber constructor, PrismaClient usará automáticamente 
  // la variable de entorno DATABASE_URL que definiste en Railway.

  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}