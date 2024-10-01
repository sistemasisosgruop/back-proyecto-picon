import { Module } from '@nestjs/common';
import { SubFamiliaService } from './sub-familia.service';
import { SubFamiliaController } from './sub-familia.controller';

@Module({
  controllers: [SubFamiliaController],
  providers: [SubFamiliaService],
})
export class SubFamiliaModule {}
