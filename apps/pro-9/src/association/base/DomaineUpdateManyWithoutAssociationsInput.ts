/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { DomaineWhereUniqueInput } from "../../domaine/base/DomaineWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class DomaineUpdateManyWithoutAssociationsInput {
  @Field(() => [DomaineWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [DomaineWhereUniqueInput],
  })
  connect?: Array<DomaineWhereUniqueInput>;

  @Field(() => [DomaineWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [DomaineWhereUniqueInput],
  })
  disconnect?: Array<DomaineWhereUniqueInput>;

  @Field(() => [DomaineWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [DomaineWhereUniqueInput],
  })
  set?: Array<DomaineWhereUniqueInput>;
}

export { DomaineUpdateManyWithoutAssociationsInput as DomaineUpdateManyWithoutAssociationsInput };
