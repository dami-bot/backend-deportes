// prisma/seed.ts
import { PrismaClient } from '@prisma/client';
import * as dotenv from 'dotenv'; // 1. Importar dotenv

dotenv.config(); // 2. Cargar las variables del archivo .env

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Empezando el sembrado de productos...');

  const productos = [
    {
      nombre: "Remera Ultra-Dry Pro",
      descripcion: "Remera técnica con tecnología de secado rápido, ideal para maratones.",
      precio: 32000,
      stock: 25,
      categoria: "Remeras",
      genero: "Hombre",
      talle: "S, M, L, XL",
      color: "Azul Eléctrico",
      imagen: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800",
      imagen2: "https://images.unsplash.com/photo-1516211613529-661705607b39?auto=format&fit=crop&w=800",
      isNew: true
    },
    {
      nombre: "Calza Compresión Strike",
      descripcion: "Calza de alta resistencia para crossfit y entrenamiento funcional.",
      precio: 45500,
      stock: 12,
      categoria: "Calzas",
      genero: "Mujer",
      talle: "XS, S, M, L",
      color: "Negro Carbono",
      imagen: "https://images.unsplash.com/photo-1539109132314-d49c02d8214d?auto=format&fit=crop&w=800",
      isNew: false
    },
    {
      nombre: "Short Speed-Run 5''",
      descripcion: "Short ultra liviano con suspensor interno y bolsillo para llaves.",
      precio: 21000,
      stock: 30,
      categoria: "Shorts",
      genero: "Unisex",
      talle: "M, L",
      color: "Rojo Fuego",
      imagen: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=800",
      isNew: true
    },
    {
      nombre: "Musculosa Elite Tank",
      descripcion: "Corte olímpico para máxima movilidad en hombros.",
      precio: 18900,
      stock: 8,
      categoria: "Remeras",
      genero: "Hombre",
      talle: "L, XL",
      color: "Gris Melange",
      imagen: "https://images.unsplash.com/photo-1571945153237-4929e783ee4a?auto=format&fit=crop&w=800",
      isNew: false,
      oferta: true
    }
  ];

  for (const prod of productos) {
    await prisma.producto.create({
      data: prod,
    });
  }

  console.log('✅ Seed finalizado: Productos cargados con éxito.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });