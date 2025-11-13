import { IsArray, IsDateString, IsNumber, IsOptional, IsString, IsUUID } from 'class-validator';

export class CreatePostDto {
    @IsString()
    title!: string;

    @IsString()
    description!: string;

    @IsOptional()
    @IsArray()
    imageUrls?: string[];

    @IsOptional()
    @IsString()
    location?: string;

    @IsOptional()
    @IsNumber()
    budget?: number;

    @IsOptional()
    @IsDateString()
    desiredTime?: string;

    @IsOptional()
    @IsUUID()
    categoryId?: string;
}
