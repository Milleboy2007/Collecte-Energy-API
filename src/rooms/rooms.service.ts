import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { Room } from './entities/room.entity';

@Injectable()
export class RoomsService {

  private Rooms: Room[] = [];

  create(createRoomDto: CreateRoomDto) {
    const {code,  buildingId, floor, type, capacity} = createRoomDto
    const newRoom = new Room(code,  buildingId, floor, type, capacity);
    Object.assign(newRoom, createRoomDto)
    this.Rooms.push(newRoom);
    return newRoom;
  }

  findAll() {
    return this.Rooms;
  }

  findOne(id: string) {
    var toFound = this.Rooms.find(r => r.id === id);
    if(!toFound) throw new NotFoundException('Aucun batiment de cette id');
    return toFound;
  }

  update(id: string, updateRoomDto: UpdateRoomDto) {
    const toChange = this.findOne(id);
    Object.assign(toChange, updateRoomDto);
    toChange.updatedAt = new Date();
    
    return toChange;
  }

  remove(id: string): void {
    const index: number = this.Rooms.findIndex((r: Room) => r.id === id);

    if(index == -1) throw new NotFoundException(`Room avec id: ${id}, non trouver`);

    this.Rooms.splice(index, 1);
  }
}
