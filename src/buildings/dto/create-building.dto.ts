import { ApiProperty } from "@nestjs/swagger";

export default class CreateBuildingDto{

    @ApiProperty({
      description: "Code d'identification du batiment",
      example: "PC"
    })
    code: string;

    @ApiProperty({
      description: 'Nom public et unique du bâtiment',
      example: 'Pavillon principal',
      maxLength: 100,
    })
    name: string;

    @ApiProperty({
      description: '7000, rue Marie-Victorin',
      example: 'Addresse du batiement'
    })
    address: string;

    @ApiProperty({
      description: 'Année de construction',
      example: 1965,
      minimum: 1800,
      maximum: 2026,
    })
    yearBuilt: number;

    constructor(code: string, name: string, address: string, yearBuit: number){
        this.code = code;
        this.name = name,
        this.address = address,
        this.yearBuilt = yearBuit
    }
}