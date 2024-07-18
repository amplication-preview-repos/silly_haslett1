import { Module } from "@nestjs/common";
import { DomaineModuleBase } from "./base/domaine.module.base";
import { DomaineService } from "./domaine.service";
import { DomaineController } from "./domaine.controller";
import { DomaineResolver } from "./domaine.resolver";

@Module({
  imports: [DomaineModuleBase],
  controllers: [DomaineController],
  providers: [DomaineService, DomaineResolver],
  exports: [DomaineService],
})
export class DomaineModule {}
