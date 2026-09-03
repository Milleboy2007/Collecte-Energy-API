export class CreateRoomDto {
    code: string;
    buildingId: string;
    floor: number;
    type?: string;
    capacity?: number;

    constructor(code: string, buildingId: string, floor: number, type: string, capacity: number){
        this.code = code;
        this.buildingId = buildingId;
        this.floor = floor;
        type ?? this.type;
        capacity ?? this.capacity;
    }
}
