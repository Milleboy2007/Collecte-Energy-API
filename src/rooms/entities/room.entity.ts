import { randomUUID } from "crypto";

export class Room {
    id: string;
    code: string;
    buildingId: string;
    floor: number;
    type?: string;
    capcity?: number;
    createdAt: Date;
    updatedAt: Date;

    constructor(code: string, buildingId: string, floor: number, type?: string, capcity?: number){
        this.id = randomUUID();
        this.code = code;
        this.buildingId = buildingId;
        this.floor = floor;
        type ?? this.type;
        capcity ?? this.capcity;
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
}
