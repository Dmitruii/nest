import {BelongsTo, BelongsToMany, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {Role} from "../roles/roles.model";
import {UserRoles} from "../roles/user-roles.model";
import {User} from "../users/users.model";

interface PostCreationAttrs {
    title: string;
    content: string;
    userId: number;
    image: string;
}

@Table({tableName: 'posts'})
export class Post extends Model<Post, PostCreationAttrs> {
    @ApiProperty({example: '1', description: 'Primary key'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'Title', description: 'Post title'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    title: string;

    @ApiProperty({example: 'Text', description: 'Post content'})
    @Column({type: DataType.STRING, allowNull: false})
    content: string;

    @ApiProperty({example: 'type: Photo', description: 'Image post'})
    @Column({type: DataType.STRING})
    image: string;

    @ApiProperty({example: '1', description: 'User id'})
    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER})
    userId: number;

    @ApiProperty({example: 'type: User', description: 'type: User'})
    @BelongsTo(() => User)
    author: User

}
