// apps/api/src/app/app.module.ts

import { Module } from '@nestjs/common';
import { GraphQLFederationModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PatientResolver } from './graphql/patients.resolver';

@Module({
  imports: [
    GraphQLFederationModule.forRoot({
      typePaths: ['./**/*.graphql']
    })
  ],
  controllers: [AppController],
  providers: [AppService, PatientResolver]
})
export class AppModule {}
