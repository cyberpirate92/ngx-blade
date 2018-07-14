import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'ngx-blade',
    templateUrl: './ngx-blade.component.html',
    styleUrls: ['./ngx-blade.component.scss']
})
export class NgxBladeComponent  {

    public readonly DEFAULT_WIDTH: number = 25;
    public readonly DEFAULT_CONFIG: BladeConfig = {
        closeButton: true,
        maximizeButton: true
    };
    
    private isMinimized: boolean = true;

    @Input() public title: string = "";
    @Input() public width: number = this.DEFAULT_WIDTH;
    @Input() public config: BladeConfig = this.DEFAULT_CONFIG;
    @Output() public onClose: EventEmitter<any>;

    constructor() {
        this.onClose = new EventEmitter();
    }

    public onMinimize(): void {
        if (!this.isMinimized) {
            this.isMinimized = !this.isMinimized;
        }
    }

    public onMaximize(): void {
        if (this.isMinimized) {
            this.isMinimized = !this.isMinimized;
        }
    }

    public close(): void {
        this.onClose.emit();
    }
}

export interface BladeConfig {
    closeButton: boolean;
    maximizeButton: boolean;
}