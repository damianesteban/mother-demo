// apps/api/src/app/set.resolver.ts

import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

export interface ReferralEntity {
  id: string | number;
  name: string;
}

@Resolver('Referral')
export class ReferralResolver {
  private sets: ReferralEntity[] = [
    {
      id: 1,
      name: 'Reffffff'
    },
    {
     id: 2,
     name: 'Refffff4'
    },
  ];

  @Query('allReferrals')
  getAllSets(): ReferralEntity[] {
    return this.sets;
  }

  @Mutation('addReferral')
  addPatient(
    @Args('name') name: string,
  ) {
    const newSet = {
      id: `${this.sets.length + 1}`,
      name
    };

    this.sets.push(newSet);

    return newSet;
  }
}