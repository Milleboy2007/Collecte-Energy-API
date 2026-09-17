import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { Room } from './schemas/room.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class RoomsService {

  constructor(
    @InjectModel(Room.name) private readonly roomModel: Model<Room>
  ){}

  async create(createRoomDto: Partial<Room>): Promise<Room> {
    return this.roomModel.create(createRoomDto);
  }

  async findAll() {
    return this.roomModel.find().exec();
  }

  async findOne(id: string): Promise<Room> {
    var toFound = await this.roomModel.findById(id).exec();
    if(!toFound) throw new NotFoundException('Aucun batiment de cette id');
    return toFound;
  }

  async update(id: string, updateRoomDto: Partial<Room>): Promise<Room> {
    var toUpdate = await this.roomModel.findByIdAndUpdate(id, updateRoomDto, {new: true}).exec();
    if(!toUpdate) throw new NotFoundException(`Aucun room de cette id: ${id}`);
    return toUpdate;
  }

  async remove(id: string): Promise<Room> {
      var toDelete = await this.roomModel.findByIdAndDelete(id).exec();
      if(!toDelete) throw new NotFoundException(`Aucun room de cette id: ${id}`);
      return toDelete;
  }
}
