import { Module } from '@nestjs/common';
import { AlmacenService } from './almacen.service';
import { AlmacenController } from './almacen.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [AlmacenController],
  providers: [AlmacenService],
  imports: [PrismaModule],
})
export class AlmacenModule {}
