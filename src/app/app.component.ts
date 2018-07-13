import { Component } from '@angular/core';
import { BladeConfig } from './modules/ngx-blade/ngx-blade.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    public bladeTitle: string = 'Transaction Details';
    public showBlade: boolean = false;

    public onBladeClose(): void {
        this.showBlade = false;
    }
}
