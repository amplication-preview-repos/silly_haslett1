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
import { AssociationWhereUniqueInput } from "../../association/base/AssociationWhereUniqueInput";

@InputType()
class DomaineWhereInput {
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
    type: () => AssociationWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AssociationWhereUniqueInput)
  @IsOptional()
  @Field(() => AssociationWhereUniqueInput, {
    nullable: true,
  })
  association?: AssociationWhereUniqueInput;
}

export { DomaineWhereInput as DomaineWhereInput };
