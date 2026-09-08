import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Rooms')
@Controller('rooms')
export class RoomsController {
  constructor(private readonly roomsService: RoomsService) {}

  
  @ApiOperation({
      summary: "",
      description: ""
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
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.roomsService.findOne(id);
  }

  @ApiOperation({
      summary: "",
      description: ""
  })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRoomDto: UpdateRoomDto) {
    return this.roomsService.update(id, updateRoomDto);
  }

  @ApiOperation({
      summary: "",
      description: ""
  })
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    return this.roomsService.remove(id);
  }
}
