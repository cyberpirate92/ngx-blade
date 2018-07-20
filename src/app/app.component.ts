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
    public bladeConfig: BladeConfig = {
        closeButton: true,
        maximizeButton: true,
        isModal: false,
    };

    public onBladeClose(): void {
        this.showBlade = false;
    }

    public example1: string = `<ngx-blade>
        <ng-template ngxBladeHeader>
            <!-- Blade header content, can have text, images and even other components -->
        </ng-template>
        <ng-template ngxBladeHeader #myBlade>
            <!-- Blade body content, can have text, images and even other components -->
        </ng-template>
    </ngx-blade>`

    public example2: string = `<ngx-blade>
        <ng-template ngxBladeHeader>
            <h3>Title</h3>
        </ng-template>
        <ng-template ngxBladeHeader #myBlade>
            <button (click)="myBlade.close()">Click me to close blade</button>
        </ng-template>
    </ngx-blade>`
}
