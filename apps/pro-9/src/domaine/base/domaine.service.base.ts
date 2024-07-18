/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Domaine as PrismaDomaine,
  Association as PrismaAssociation,
} from "@prisma/client";

export class DomaineServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.DomaineCountArgs, "select">): Promise<number> {
    return this.prisma.domaine.count(args);
  }

  async domaines(args: Prisma.DomaineFindManyArgs): Promise<PrismaDomaine[]> {
    return this.prisma.domaine.findMany(args);
  }
  async domaine(
    args: Prisma.DomaineFindUniqueArgs
  ): Promise<PrismaDomaine | null> {
    return this.prisma.domaine.findUnique(args);
  }
  async createDomaine(args: Prisma.DomaineCreateArgs): Promise<PrismaDomaine> {
    return this.prisma.domaine.create(args);
  }
  async updateDomaine(args: Prisma.DomaineUpdateArgs): Promise<PrismaDomaine> {
    return this.prisma.domaine.update(args);
  }
  async deleteDomaine(args: Prisma.DomaineDeleteArgs): Promise<PrismaDomaine> {
    return this.prisma.domaine.delete(args);
  }

  async getAssociation(parentId: string): Promise<PrismaAssociation | null> {
    return this.prisma.domaine
      .findUnique({
        where: { id: parentId },
      })
      .association();
  }
}
