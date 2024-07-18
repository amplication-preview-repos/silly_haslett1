import * as graphql from "@nestjs/graphql";
import { DomaineResolverBase } from "./base/domaine.resolver.base";
import { Domaine } from "./base/Domaine";
import { DomaineService } from "./domaine.service";

@graphql.Resolver(() => Domaine)
export class DomaineResolver extends DomaineResolverBase {
  constructor(protected readonly service: DomaineService) {
    super(service);
  }
}
