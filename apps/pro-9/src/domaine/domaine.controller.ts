import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DomaineService } from "./domaine.service";
import { DomaineControllerBase } from "./base/domaine.controller.base";

@swagger.ApiTags("domaines")
@common.Controller("domaines")
export class DomaineController extends DomaineControllerBase {
  constructor(protected readonly service: DomaineService) {
    super(service);
  }
}
