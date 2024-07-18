import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DomaineServiceBase } from "./base/domaine.service.base";

@Injectable()
export class DomaineService extends DomaineServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
