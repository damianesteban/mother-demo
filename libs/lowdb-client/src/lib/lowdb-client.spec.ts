import { lowdbClient } from './lowdb-client';

describe('lowdbClient', () => {
  it('should work', () => {
    expect(lowdbClient()).toEqual('lowdb-client');
  });
});
