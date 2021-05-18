// apps/api/src/app/set.resolver.ts

import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

export interface ProviderEntity {
  id: string | number;
  firstName: string;
  lastName: string;
  email: string;
}

@Resolver('Provider')
export class ProviderResolver {
  private sets: ProviderEntity[] = [
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

  @Query('allProviders')
  getAllSets(): ProviderEntity[] {
    return this.sets;
  }

  @Mutation('addProvider')
  addProvider(
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
