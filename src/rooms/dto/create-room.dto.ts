import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateRoomDto {
    @ApiProperty({
        description: "Code d'identification de la local",
        example: "S-013",
        maxLength: 0
    })
    @IsString()
    @IsNotEmpty()
    code!: string;

    @ApiProperty({
        description: "Code d'identification du batiment du local",
        format: "uuid",
    })
    @IsString()
    @IsNotEmpty()
    buildingId!: string;

    @ApiProperty({
        description: "Numero d'etage du local",
        example: 0,
        minimum: 0
    })
    @IsNumber()
    floor!: number;

    @ApiProperty({
        description: "Type du local",
        example: "Informatique",
        maxLength: 100
    })
    @IsString()
    @IsOptional()
    type?: string;

    @ApiProperty({
        description: "Capacite du local",
        example: 30,
        minimum: 0
    })
    @IsNumber()
    @IsOptional()
    capacity?: number;

    // constructor(code: string, buildingId: string, floor: number, type: string, capacity: number){
    //     this.code = code;
    //     this.buildingId = buildingId;
    //     this.floor = floor;
    //     type ?? this.type;
    //     capacity ?? this.capacity;
    // }
}
