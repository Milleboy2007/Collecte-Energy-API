import { randomUUID } from "crypto";

export default class Building{
    id: string;
    name: string;
    address: string;
    yearBuilt: number;
    createdAt: Date;
    updatedAt: Date;

    constructor(name: string, address: string, yearBuit: number){
        this.id = randomUUID();
        this.name = name;
        this.address = address;
        this.yearBuilt = yearBuit;
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
}