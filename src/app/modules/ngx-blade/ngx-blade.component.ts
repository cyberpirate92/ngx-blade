import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'ngx-blade',
    templateUrl: './ngx-blade.component.html'
})
export class NgxBladeComponent  {

    public readonly DEFAULT_WIDTH: number = 25;
    public readonly DEFAULT_CONFIG: BladeConfig = {
        closeButton: true,
        maximizeButton: true,
        isModal: false
    };
    
    public isMinimized: boolean = true;

    @Input() public width: number = this.DEFAULT_WIDTH;
    @Input() public config: BladeConfig | Partial<BladeConfig> = this.DEFAULT_CONFIG;
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
    isModal: boolean;
}