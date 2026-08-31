import { Injectable, NotFoundException } from '@nestjs/common';
import Building from './entities/building.entity';

@Injectable()
export class BuildingsService {

    private Buildings: Building[] = []

    GetAllBuilding(){
        return this.Buildings;
    }

    CreateNewBuilding(name: string, address: string, yearBuilt: number){
        const newBuilding = new Building(name, address, yearBuilt)
        this.Buildings.push(newBuilding);
        return newBuilding;
    }

    FoundById(id: string){
        var toFound = this.Buildings.find(b => b.id == id);
        if(!toFound) throw new NotFoundException('Aucun batiment de cette id');
        return toFound;
    }
}
