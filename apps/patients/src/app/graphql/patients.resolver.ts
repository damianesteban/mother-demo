// apps/api/src/app/set.resolver.ts

import { Args, Mutation, Query, Resolver, ResolveReference } from '@nestjs/graphql';
import { PatientEntity } from '@mother-demo/common-types'

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
        id: 2,
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

  @ResolveReference()
  resolveReference(reference: { __typename: string, id: string }) {
    return this.sets.find(i => i.id === reference.id)
  }
}
