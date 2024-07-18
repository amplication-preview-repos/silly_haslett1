import { Module } from "@nestjs/common";
import { FederationModule } from "./federation/federation.module";
import { AssociationModule } from "./association/association.module";
import { DomaineModule } from "./domaine/domaine.module";
import { AdresseModule } from "./adresse/adresse.module";
import { UtilisateurModule } from "./utilisateur/utilisateur.module";
import { IdentiteModule } from "./identite/identite.module";
import { TelecomModule } from "./telecom/telecom.module";
import { InformationPostaleModule } from "./informationPostale/informationPostale.module";
import { AffectationModule } from "./affectation/affectation.module";
import { SalarieModule } from "./salarie/salarie.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    FederationModule,
    AssociationModule,
    DomaineModule,
    AdresseModule,
    UtilisateurModule,
    IdentiteModule,
    TelecomModule,
    InformationPostaleModule,
    AffectationModule,
    SalarieModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
