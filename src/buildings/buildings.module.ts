import { Module } from '@nestjs/common';
import { BuildingsController } from './buildings.controller';
import { BuildingsService } from './buildings.service';
import Building from './entities/building.entity';

@Module({
  controllers: [BuildingsController],
  providers: [BuildingsService],
  imports: [Building]
})
export class BuildingsModule {}
