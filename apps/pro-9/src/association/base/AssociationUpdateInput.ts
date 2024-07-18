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
import { DomaineUpdateManyWithoutAssociationsInput } from "./DomaineUpdateManyWithoutAssociationsInput";
import { AffectationUpdateManyWithoutAssociationsInput } from "./AffectationUpdateManyWithoutAssociationsInput";

@InputType()
class AssociationUpdateInput {
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
    type: () => DomaineUpdateManyWithoutAssociationsInput,
  })
  @ValidateNested()
  @Type(() => DomaineUpdateManyWithoutAssociationsInput)
  @IsOptional()
  @Field(() => DomaineUpdateManyWithoutAssociationsInput, {
    nullable: true,
  })
  domaines?: DomaineUpdateManyWithoutAssociationsInput;

  @ApiProperty({
    required: false,
    type: () => AffectationUpdateManyWithoutAssociationsInput,
  })
  @ValidateNested()
  @Type(() => AffectationUpdateManyWithoutAssociationsInput)
  @IsOptional()
  @Field(() => AffectationUpdateManyWithoutAssociationsInput, {
    nullable: true,
  })
  affectations?: AffectationUpdateManyWithoutAssociationsInput;
}

export { AssociationUpdateInput as AssociationUpdateInput };
