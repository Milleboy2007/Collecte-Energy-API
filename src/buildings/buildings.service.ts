import { Injectable } from '@nestjs/common';
import Building from './entities/buildings.entity';

@Injectable()
export class BuildingsService {

    constructor(
        private Buildings: Building[]
    ){}

    GetAllBuilding(){
        return this.Buildings;
    }
}
