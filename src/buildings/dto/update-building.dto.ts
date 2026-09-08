import { PartialType } from '@nestjs/swagger';
import CreateBuildingDto from './create-building.dto';

export class UpdateBuilding extends PartialType(CreateBuildingDto) {}
