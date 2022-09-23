import { ApiProperty } from "@nestjs/swagger";
import {IsNumber, IsString} from "class-validator";

export class AddRoleDto {

    @ApiProperty({example: '1', description: 'Value'})
    @IsString({message: "Must be string"})
    readonly value: string;

    @ApiProperty({example: '1', description: 'User id'})
    @IsNumber({}, {message: "Must be integer"})
    readonly userId: number;
}
