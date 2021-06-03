export function commonTypes(): string {
  return 'common-types';
}

export interface PatientEntity {
  id: string | number;
  firstName: string;
  lastName: string;
  referrals?: ReferralEntity[]
  email: string;
}

export interface ProviderEntity {
  id: string | number;
  firstName: string;
  lastName: string;
  email: string;
  referrals?: ReferralEntity[]
}

export interface ReferralEntity {
  id: string | number;
  name: string;
  patient: PatientEntity;
  provider: ProviderEntity
}