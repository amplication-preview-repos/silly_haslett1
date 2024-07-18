/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IdentiteWhereInput } from "./IdentiteWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { IdentiteOrderByInput } from "./IdentiteOrderByInput";

@ArgsType()
class IdentiteFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => IdentiteWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => IdentiteWhereInput, { nullable: true })
  @Type(() => IdentiteWhereInput)
  where?: IdentiteWhereInput;

  @ApiProperty({
    required: false,
    type: [IdentiteOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [IdentiteOrderByInput], { nullable: true })
  @Type(() => IdentiteOrderByInput)
  orderBy?: Array<IdentiteOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { IdentiteFindManyArgs as IdentiteFindManyArgs };
