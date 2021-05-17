// apps/api/src/app/set.resolver.ts

import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

export interface PatientEntity {
  id: string | number;
  firstName: string;
  lastName: string;
  email: string;
}

@Resolver('Patient')
export class PatientResolver {
  private sets: PatientEntity[] = [
    {
      id: 1,
      firstName: 'Bob',
      lastName: 'Yab',
      email: 'gggg@www.com'
    },
    {
        id: 1,
        firstName: 'Bob',
        lastName: 'Yab',
        email: 'gggg@www.com'
    },
  ];

  @Query('allPatients')
  getAllSets(): PatientEntity[] {
    return this.sets;
  }

  @Mutation('addPatient')
  addPatient(
    @Args('firstName') firstName: string,
    @Args('lastName') lastName: string,
    @Args('email') email: string
  ) {
    const newSet = {
      id: `${this.sets.length + 1}`,
      firstName,
      lastName,
      email
    };

    this.sets.push(newSet);

    return newSet;
  }
}
