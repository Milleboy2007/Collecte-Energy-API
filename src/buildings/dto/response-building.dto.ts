import { ApiProperty } from "@nestjs/swagger";

export class ResponseBuildingDto {
    @ApiProperty({ format: 'uuid' })
    id!: string;

    @ApiProperty({ example: 'Pavillon principal' })
    name!: string;

    @ApiProperty({ example: '7000, rue Marie-Victorin' })
    address!: string;

    @ApiProperty({ example: 1965 })
    yearBuilt!: number;
}