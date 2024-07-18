/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { AffectationWhereUniqueInput } from "../../affectation/base/AffectationWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class AffectationUpdateManyWithoutAssociationsInput {
  @Field(() => [AffectationWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [AffectationWhereUniqueInput],
  })
  connect?: Array<AffectationWhereUniqueInput>;

  @Field(() => [AffectationWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [AffectationWhereUniqueInput],
  })
  disconnect?: Array<AffectationWhereUniqueInput>;

  @Field(() => [AffectationWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [AffectationWhereUniqueInput],
  })
  set?: Array<AffectationWhereUniqueInput>;
}

export { AffectationUpdateManyWithoutAssociationsInput as AffectationUpdateManyWithoutAssociationsInput };
