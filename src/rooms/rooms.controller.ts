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
      summary: "",
      description: ""
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
      summary: "",
      description: ""
  })
  @Get()
  findAll() {
    return this.roomsService.findAll();
  }


  @ApiOperation({
      summary: "",
      description: ""
  })
  @ApiParam({
    name: "id",
    description: "",
    format: "uuid"
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.roomsService.findOne(id);
  }


  @ApiOperation({
      summary: "",
      description: ""
  })
  @ApiParam({
    name: "id",
    description: "",
    format: "uuid"
  })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRoomDto: UpdateRoomDto) {
    return this.roomsService.update(id, updateRoomDto);
  }


  @ApiOperation({
      summary: "",
      description: ""
  })
  @ApiParam({
    name: "id",
    description: "",
    format: "uuid"
  })
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    return this.roomsService.remove(id);
  }
}
