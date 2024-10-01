import { Module } from '@nestjs/common';
import { PersonalService } from './personal.service';
import { PersonalController } from './personal.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [PersonalController],
  providers: [PersonalService],
  imports: [PrismaModule],
})
export class PersonalModule {}
