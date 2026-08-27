import { Injectable, NotFoundException } from '@nestjs/common';
import Building from './entities/buildings.entity';

@Injectable()
export class BuildingsService {

    private Buildings: Building[] = []

    GetAllBuilding(){
        return this.Buildings;
    }

    MakeId(){
        while (true){
            const newId = Math.floor(Math.random() * 100) + 1;
            var isOk = this.Buildings.find(b => b.id == newId);
            if (!isOk) return newId;
        }
    }

    CreateNewBuilding(name: string, address: string, yearBuilt: number){
        const newBuilding = new Building(this.MakeId(), name, address, yearBuilt)
        this.Buildings.push(newBuilding);
        return newBuilding;
    }

    FoundById(id: number){
        var toFound = this.Buildings.find(b => b.id == id);
        if(!toFound) throw new NotFoundException('Aucun batiment de cette id');
        return toFound;
    }
}
