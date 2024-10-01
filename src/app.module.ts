import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonalModule } from './mantenimiento/personal/personal.module';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './common/guards/auth.guard';

import { EmpresaModule } from './mantenimiento/empresa/empresa.module';
import { PuestoModule } from './mantenimiento/puesto/puesto.module';
import { SucursalModule } from './mantenimiento/sucursal/sucursal.module';
import { AlmacenModule } from './mantenimiento/almacen/almacen.module';
import { FamiliaModule } from './mantenimiento/maestro-codigos/familia/familia.module';
import { SubFamiliaModule } from './mantenimiento/maestro-codigos/sub-familia/sub-familia.module';
import { CaracteristicaModule } from './mantenimiento/maestro-codigos/caracteristica/caracteristica.module';
import { MaterialModule } from './mantenimiento/maestro-codigos/material/material.module';

@Module({
  imports: [PersonalModule, AuthModule, EmpresaModule, PuestoModule, SucursalModule, AlmacenModule, FamiliaModule, SubFamiliaModule, CaracteristicaModule, MaterialModule],
  controllers: [AppController],
  providers: [
    AppService,
    // {
    //   provide: APP_GUARD,
    //   useClass: AuthGuard,
    // },
  ],
})
export class AppModule {}
