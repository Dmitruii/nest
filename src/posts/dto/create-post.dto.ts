import { ApiProperty } from "@nestjs/swagger";

export class CreatePostDto {
    
    @ApiProperty({example: 'Title', description: 'Post title'})
    readonly title: string;

    @ApiProperty({example: 'Text', description: 'Post content'})
    readonly content: string;

    @ApiProperty({example: '1', description: 'User id'})
    readonly userId: number;
}
