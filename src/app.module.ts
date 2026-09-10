import { Module } from '@nestjs/common';
import { HealthModule } from './health/health.module';
import { BuildingsModule } from './buildings/buildings.module';
import { RoomsModule } from './rooms/rooms.module';

@Module({

  imports: [HealthModule, BuildingsModule, RoomsModule]
})
export class AppModule {}
