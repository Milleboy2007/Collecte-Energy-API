import { Module } from '@nestjs/common';
import { BuildingsController } from './buildings.controller';
import { BuildingsService } from './buildings.service';
import { Building, BuildingSchema } from './schemas/building.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [BuildingsController],
  providers: [BuildingsService],
  imports: [MongooseModule.forFeature([{ name: Building.name, schema: BuildingSchema }])],
})
export class BuildingsModule {}
