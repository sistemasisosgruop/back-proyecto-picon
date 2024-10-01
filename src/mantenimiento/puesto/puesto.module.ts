import { Module } from '@nestjs/common';
import { PuestoService } from './puesto.service';
import { PuestoController } from './puesto.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [PuestoController],
  providers: [PuestoService],
  imports: [PrismaModule],
})
export class PuestoModule {}
