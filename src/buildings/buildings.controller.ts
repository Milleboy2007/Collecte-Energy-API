import { Controller, Get } from '@nestjs/common';
import { BuildingsService } from './buildings.service';

@Controller('buildings')
export class BuildingsController {
    constructor(
        private buildingService: BuildingsService
    ){}

    @Get()
    GetAllBuilding(){
        return this.buildingService.GetAllBuilding();
    }
}
