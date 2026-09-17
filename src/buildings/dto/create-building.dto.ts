import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsOptional, IsString, Matches, Max, Min } from "class-validator";

export default class CreateBuildingDto{

    @ApiProperty({
      description: "Code d'identification du batiment",
      example: "PC"
    })
    @IsString()
    @IsNotEmpty()
    @Matches(/(?:bld | BLD)-\d{3}/, {
      message: "les code de batiment devrait suivre le format suivant: bld-xxx ou BLD-xxx"
    })
    code!: string;

    @ApiProperty({
      description: 'Nom public et unique du bâtiment',
      example: 'Pavillon principal',
      maxLength: 100,
    })
    @IsString()
    @Max(100)
    name!: string;

    @ApiProperty({
      description: '7000, rue Marie-Victorin',
      example: 'Addresse du batiement'
    })
    @IsString()
    address!: string;

    @ApiProperty({
      description: 'Année de construction',
      example: 1965,
      minimum: 1800,
      maximum: 2026,
    })
    @IsNumber()
    @IsOptional()
    @Min(1500)
    @Max(new Date().getFullYear())
    yearBuilt!: number;

    // constructor(code: string, name: string, address: string, yearBuit: number){
    //     this.code = code;
    //     this.name = name,
    //     this.address = address,
    //     this.yearBuilt = yearBuit
    // }
}