import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxBladeModule } from './modules/ngx-blade/ngx-blade.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxBladeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
