import { Module } from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { RoomsController } from './rooms.controller';
import { MongooseModule } from 'node_modules/@nestjs/mongoose/dist/mongoose.module';
import { RoomSchema, Room } from './schemas/room.schema';

@Module({
  controllers: [RoomsController],
  providers: [RoomsService],
  imports: [MongooseModule.forFeature([{ name: Room.name, schema: RoomSchema }])],
})
export class RoomsModule {}
