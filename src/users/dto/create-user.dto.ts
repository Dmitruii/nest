import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsString, Length} from "class-validator";

export class CreateUserDto {

    @ApiProperty({example: 'user@mail.ru', description: 'email'})
    @IsString({message: 'Must be string'})
    @IsEmail({}, {message: "Invalid email"})
    readonly email: string;

    @ApiProperty({example: '12345', description: 'password'})
    @IsString({message: 'Must be string'})
    @Length(4, 16, {message: 'More than 4 and less than 16'})
    readonly password: string;
}
