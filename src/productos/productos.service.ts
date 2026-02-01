import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ProductosService {
  constructor(private prisma: PrismaService) {} // Inyectamos Prisma

  async create(data: Prisma.ProductoCreateInput) {
    return this.prisma.producto.create({
      data,
    });
  }

  async findAll() {
    return this.prisma.producto.findMany();
  }
}