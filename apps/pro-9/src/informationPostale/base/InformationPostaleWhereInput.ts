/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AdresseWhereUniqueInput } from "../../adresse/base/AdresseWhereUniqueInput";

@InputType()
class InformationPostaleWhereInput {
  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  ancienCogCommune?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  cogCommune?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => AdresseWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AdresseWhereUniqueInput)
  @IsOptional()
  @Field(() => AdresseWhereUniqueInput, {
    nullable: true,
  })
  adresses?: AdresseWhereUniqueInput;
}

export { InformationPostaleWhereInput as InformationPostaleWhereInput };
