import { Injectable, NotFoundException } from '@nestjs/common';
//import Building from './entities/building.entity';
import { Building } from './schemas/building.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class BuildingsService {

    constructor(
        @InjectModel(Building.name) private readonly buildingModel: Model<Building>
    ) {}

    async GetAllBuilding(): Promise<Building[]> {
        return this.buildingModel.find().exec();
    }

    async CreateNewBuilding(createBuildingDto: Partial<Building>): Promise<Building> {
        return this.buildingModel.create(createBuildingDto);
    }

    async FoundById(id: string): Promise<Building> {
        var toFound = await this.buildingModel.findById(id).exec();
        if(!toFound) throw new NotFoundException('Aucun batiment de cette id');
        return toFound;
    }

    async UpdateBuilding(id: string, updateBuildingDto: Partial<Building>): Promise<Building> {
        var toUpdate = await this.buildingModel.findByIdAndUpdate(id, updateBuildingDto, { new: true }).exec();
        if(!toUpdate) throw new NotFoundException(`Aucun batiment de cette id: ${id}`);
        return toUpdate;
    }

    async DeleteBuilding(id: string): Promise<Building> {
        var toDelete = await this.buildingModel.findByIdAndDelete(id).exec();
        if(!toDelete) throw new NotFoundException(`Aucun batiment de cette id: ${id}`);
        return toDelete;
    }
}
