# NgxBlade  

[![npm](https://img.shields.io/npm/v/ngx-blade.svg)](https://www.npmjs.com/package/ngx-blade)
[![npm](https://img.shields.io/npm/dw/ngx-blade.svg)](https://www.npmjs.com/package/ngx-blade) 

A simplistic blade component for Angular with minimize/maximize and a close button.

## [Stackblitz Demo](https://stackblitz.com/edit/angular-ngx-blade)

## Installation

```npm i ngx-blade --save```

Import `NgxBladeModule` into in your module


```typescript

import { NgxBladeModule } from 'ngx-blade';

@NgModule({
    //..
    imports:      [ NgxBladeModule, .. ]
})

```


---

### `NgxBladeComponent`

#### Selector

```html

<ngx-blade></ngx-blade>

```

#### Inputs

* `title: string` - Text to be displayed as the blade title.
* `width: number` - Width of the blade in percentage relative to the browser window.
* `config: BladeConfig` - Blade configuration properties. See [BladeConfig](#BladeConfig)

#### Outputs

* `onClose` - Emitted when close button is clicked. if `closeButton` is set as `false`, this event will never be emitted.

### `BladeConfig`

contains the following properties

```typescript

export interface BladeConfig {
    closeButton: boolean;
    maximizeButton: boolean;
}

```


* `closeButton: boolean` - specify whether blade should contain a close button.
* `maximizeButton: boolean` - specify whether blade should contain the minimize/maxime button.

If a config is not provided as input, all properties default to `true`.

## Sample Usage

```html

<ngx-blade [title]="bladeTitle" width="50" (onClose)="onBladeClose()" *ngIf="showBlade" #blade>
  <div class="custom">
    <h4> Lorem Ipsum </h4>
    <button type="button" (click)="blade.close()">Close blade</button>
  </div>
</ngx-blade>

```
---