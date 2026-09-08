import { ApiProperty } from "@nestjs/swagger";

export class CreateRoomDto {
    @ApiProperty({
        description: "Code d'identification de la local",
        example: "S-013",
        maxLength: 0
    })
    code: string;

    @ApiProperty({
        description: "Code d'identification du batiment du local",
        format: "uuid",
    })
    buildingId: string;

    @ApiProperty({
        description: "Numero d'etage du local",
        example: 0,
        minimum: 0
    })
    floor: number;

    @ApiProperty({
        description: "Type du local",
        example: "Informatique",
        maxLength: 100
    })
    type?: string;

    @ApiProperty({
        description: "Capacite du local",
        example: 30,
        minimum: 0
    })
    capacity?: number;

    constructor(code: string, buildingId: string, floor: number, type: string, capacity: number){
        this.code = code;
        this.buildingId = buildingId;
        this.floor = floor;
        type ?? this.type;
        capacity ?? this.capacity;
    }
}
