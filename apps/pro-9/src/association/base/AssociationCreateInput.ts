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
import { FederationWhereUniqueInput } from "../../federation/base/FederationWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { DomaineCreateNestedManyWithoutAssociationsInput } from "./DomaineCreateNestedManyWithoutAssociationsInput";
import { AffectationCreateNestedManyWithoutAssociationsInput } from "./AffectationCreateNestedManyWithoutAssociationsInput";

@InputType()
class AssociationCreateInput {
  @ApiProperty({
    required: false,
    type: () => FederationWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => FederationWhereUniqueInput)
  @IsOptional()
  @Field(() => FederationWhereUniqueInput, {
    nullable: true,
  })
  federation?: FederationWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => DomaineCreateNestedManyWithoutAssociationsInput,
  })
  @ValidateNested()
  @Type(() => DomaineCreateNestedManyWithoutAssociationsInput)
  @IsOptional()
  @Field(() => DomaineCreateNestedManyWithoutAssociationsInput, {
    nullable: true,
  })
  domaines?: DomaineCreateNestedManyWithoutAssociationsInput;

  @ApiProperty({
    required: false,
    type: () => AffectationCreateNestedManyWithoutAssociationsInput,
  })
  @ValidateNested()
  @Type(() => AffectationCreateNestedManyWithoutAssociationsInput)
  @IsOptional()
  @Field(() => AffectationCreateNestedManyWithoutAssociationsInput, {
    nullable: true,
  })
  affectations?: AffectationCreateNestedManyWithoutAssociationsInput;
}

export { AssociationCreateInput as AssociationCreateInput };
