import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { ProblemDetailsDto } from 'src/probleme-details.dto';
import { ResponseRoomDto } from './dto/response-room.dto';

@ApiTags('Rooms')
@ApiBadRequestResponse({
  description: 'Données invalides.',
  type: ProblemDetailsDto,
})
@Controller({path: "rooms", version: "1"})
export class RoomsController {
  constructor(private readonly roomsService: RoomsService) {}

  
  @ApiOperation({
      summary: "Creation d'un local",
      description: "Creation d'un local dans la collection courante."
  })
  @ApiCreatedResponse({
    description: 'Room créé.',
    type: ResponseRoomDto,
    headers: {
      Location: {
        description: 'URI de la nouvelle ressource',
        schema: { type: 'string' },
      },
    },
  })
  @Post()
  create(@Body() createRoomDto: CreateRoomDto) {
    return this.roomsService.create(createRoomDto);
  }


  @ApiOperation({
      summary: "Recuperation de tout les locals",
      description: "Recuperation de tout les locals enregistrer dans la collection courante."
  })
  @Get()
  findAll() {
    return this.roomsService.findAll();
  }


  @ApiOperation({
      summary: "Recuperation d'un local",
      description: "Recuperation d'un local precis dans la collection courante."
  })
  @ApiParam({
    name: "id",
    description: "Code d'identification unique du local.",
    format: "uuid"
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.roomsService.findOne(id);
  }


  @ApiOperation({
      summary: "Modification d'un local",
      description: "Modification des information d'un local de la collection courante."
  })
  @ApiParam({
    name: "id",
    description: "Code d'identification unique du local.",
    format: "uuid"
  })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRoomDto: UpdateRoomDto) {
    return this.roomsService.update(id, updateRoomDto);
  }


  @ApiOperation({
      summary: "Suppresion d'un local",
      description: "Suppresion definitive d'un local de la collection courante."
  })
  @ApiParam({
    name: "id",
    description: "Code d'identification unique d'un local.",
    format: "uuid"
  })
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    return this.roomsService.remove(id);
  }
}
