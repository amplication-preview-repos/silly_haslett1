/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  IsDate,
  MaxLength,
  IsOptional,
  IsEnum,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";
import { EnumIdentiteCivilite } from "./EnumIdentiteCivilite";
import { Salarie } from "../../salarie/base/Salarie";

@ObjectType()
class Identite {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  codeLieuNaissance!: string | null;

  @ApiProperty({
    required: false,
    enum: EnumIdentiteCivilite,
  })
  @IsEnum(EnumIdentiteCivilite)
  @IsOptional()
  @Field(() => EnumIdentiteCivilite, {
    nullable: true,
  })
  civilite?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: () => Salarie,
  })
  @ValidateNested()
  @Type(() => Salarie)
  @IsOptional()
  salarie?: Salarie | null;
}

export { Identite as Identite };
