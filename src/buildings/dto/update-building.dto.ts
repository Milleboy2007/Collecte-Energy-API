import { PartialType } from '@nestjs/mapped-types';
import CreateBuildingDto from './create-building.dto';

export class UpdateBuilding extends PartialType(CreateBuildingDto) {}
