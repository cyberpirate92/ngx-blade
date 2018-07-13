import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxBladeComponent } from './ngx-blade.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NgxBladeComponent],
  exports: [NgxBladeComponent]
})
export class NgxBladeModule { }
