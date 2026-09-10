import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { BuildingsService } from './buildings.service';
import CreateBuildingDto from './dto/create-building.dto';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { ResponseBuildingDto } from './dto/response-building.dto';
import { ProblemDetailsDto } from '../probleme-details.dto';

@ApiTags('Buildings')
@ApiBadRequestResponse({
    description: 'Données invalides.',
    type: ProblemDetailsDto,
})
@Controller({
    path: 'buildings',
    version: '1'
})
export class BuildingsController {
    constructor(
        private readonly buildingService: BuildingsService
    ){}

    @ApiOperation({
        summary: "Recuperer tout les batiments",
        description: "Recupere tout les batiments qui se trouve dans la collection courante."
    })
    @Get()
    GetAllBuilding(){
        return this.buildingService.GetAllBuilding();
    }

    
    @ApiOperation({
        summary: "Creer un batiment",
        description: "Ajoute un batiment a la collection courante."
    })
    @ApiCreatedResponse({
      description: 'Bâtiment créé.',
      type: ResponseBuildingDto,
      headers: {
        Location: {
          description: 'URI de la nouvelle ressource',
          schema: { type: 'string' },
        },
      },
    })
    @Post('/create')
    CreateNewBuilding(@Body() body:CreateBuildingDto){
        return this.buildingService.CreateNewBuilding(body.code, body.name, body.address, body.yearBuilt);
    }

    
    @ApiOperation({
        summary: "Recupere un batiment",
        description: "Recupere un batiment precis de la collection courante."
    })
    @ApiParam({
      name: 'id',
      description: 'Identifiant UUID du bâtiment',
      format: 'uuid',
    })
    @Get('/:id')
    FoundById(@Param('id') id:string){
        return this.buildingService.FoundById(id);
    }
}
