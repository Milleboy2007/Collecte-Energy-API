import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { BuildingsService } from './buildings.service';
import CreateBuildingDto from './dto/create-building.dto';

@Controller({
    path: 'buildings',
    version: '1'
})
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
        return this.buildingService.CreateNewBuilding(body.code, body.name, body.address, body.yearBuilt);
    }

    @Get('/:id')
    FoundById(@Param('id') id:string){
        return this.buildingService.FoundById(id);
    }
}
