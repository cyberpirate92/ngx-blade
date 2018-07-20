import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NgxBladeModule } from './modules/ngx-blade/ngx-blade.module';
import { FormsModule } from '../../node_modules/@angular/forms';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxBladeModule, FormsModule],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
