import { ApiProperty } from "@nestjs/swagger";

  export class ResponseRoomDto {
    @ApiProperty({format: "uuid"})
    id!: string;

    @ApiProperty({example: ""})
    code!: string;

    @ApiProperty({format: "uuid"})
    buildingId!: string;

    @ApiProperty({example: 0})
    floor!: number;
  }