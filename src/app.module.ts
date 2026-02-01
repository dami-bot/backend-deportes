import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductosController } from './productos/productos.controller'; // Asegura la ruta
import { ProductosService } from './productos/productos.service';       // Asegura la ruta
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [],
  controllers: [AppController, ProductosController], // Agregá el controlador aquí
  providers: [AppService, ProductosService, PrismaService], // Agregá el service aquí
})
export class AppModule {}