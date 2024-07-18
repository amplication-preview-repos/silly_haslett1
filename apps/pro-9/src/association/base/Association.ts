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
import { IsString, IsDate, ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { Federation } from "../../federation/base/Federation";
import { Domaine } from "../../domaine/base/Domaine";
import { Affectation } from "../../affectation/base/Affectation";

@ObjectType()
class Association {
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
    type: () => Federation,
  })
  @ValidateNested()
  @Type(() => Federation)
  @IsOptional()
  federation?: Federation | null;

  @ApiProperty({
    required: false,
    type: () => [Domaine],
  })
  @ValidateNested()
  @Type(() => Domaine)
  @IsOptional()
  domaines?: Array<Domaine>;

  @ApiProperty({
    required: false,
    type: () => [Affectation],
  })
  @ValidateNested()
  @Type(() => Affectation)
  @IsOptional()
  affectations?: Array<Affectation>;
}

export { Association as Association };
