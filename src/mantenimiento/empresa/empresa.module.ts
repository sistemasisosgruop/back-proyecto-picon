import { Module } from '@nestjs/common';
import { EmpresaService } from './empresa.service';
import { EmpresaController } from './empresa.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [EmpresaController],
  providers: [EmpresaService],
  imports: [PrismaModule],
})
export class EmpresaModule {}
