import { NgxBladeModule } from './ngx-blade.module';

describe('NgxBladeModule', () => {
  let ngxBladeModule: NgxBladeModule;

  beforeEach(() => {
    ngxBladeModule = new NgxBladeModule();
  });

  it('should create an instance', () => {
    expect(ngxBladeModule).toBeTruthy();
  });
});
