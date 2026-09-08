import { ApiProperty } from "@nestjs/swagger";

export class CreateRoomDto {
    @ApiProperty({
        description: "",
        example: "",
        maxLength: 0
    })
    code: string;

    @ApiProperty({
        description: "",
        example: "",
        maxLength: 0
    })
    buildingId: string;

    @ApiProperty({
        description: "",
        example: 0,
        minimum: 0
    })
    floor: number;

    @ApiProperty({
        description: "",
        example: "",
        maxLength: 0
    })
    type?: string;

    @ApiProperty({
        description: "",
        example: 0,
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
