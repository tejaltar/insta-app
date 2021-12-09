import { UserFeedModule } from './user-feed.module';

describe('UserFeedModule', () => {
  let userFeedModule: UserFeedModule;

  beforeEach(() => {
    userFeedModule = new UserFeedModule();
  });

  it('should create an instance', () => {
    expect(userFeedModule).toBeTruthy();
  });
});
