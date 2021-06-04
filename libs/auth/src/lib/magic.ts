import { Magic } from '@magic-sdk/admin';

export const magic = new Magic('sk_live_39B27DE8E6EB9768')

export const loginWithMagic = (key: string, email: string) =>
  magic.secretApiKey
