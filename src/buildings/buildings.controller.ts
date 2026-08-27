import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { BuildingsService } from './buildings.service';
import CreateBuildingDto from './dto/create-building.dto';

@Controller('buildings')
export class BuildingsController {
    constructor(
        private buildingService: BuildingsService
    ){}

    @Get()
    GetAllBuilding(){
        return this.buildingService.GetAllBuilding();
    }

    @Post('/create')
    CreateNewBuilding(@Body() body:CreateBuildingDto){
        return this.buildingService.CreateNewBuilding(body.name, body.address, body.yearBuilt);
    }

    @Get('/:id')
    FoundById(@Param('id', ParseIntPipe) id:number){
        return this.buildingService.FoundById(id);
    }
}
