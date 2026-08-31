import { randomUUID } from "crypto";

export default class Building{
    id: string;
    code: string;
    name: string;
    address: string;
    yearBuilt: number;
    createdAt: Date;
    updatedAt: Date;

    constructor(code: string, name: string, address: string, yearBuit: number){
        this.id = randomUUID();
        this.code = code;
        this.name = name;
        this.address = address;
        this.yearBuilt = yearBuit;
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
}