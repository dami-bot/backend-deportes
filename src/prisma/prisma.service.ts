import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor() {
    // En Prisma 7, es OBLIGATORIO pasarle la configuración al super()
    super({
      
       datasourceUrl: process.env.DATABASE_URL,
      
    });
  }

  async onModuleInit() {
    await this.$connect();
  }
}