import { ApiProperty } from "@nestjs/swagger";

export class CreateRoleDto {

    @ApiProperty({example: 'Example', description: 'Value'})
    readonly value: string;

    @ApiProperty({example: 'Description', description: 'Role description'})
    readonly description: string;
}
