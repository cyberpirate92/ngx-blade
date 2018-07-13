# NgxBlade  

[![npm](https://img.shields.io/npm/v/npm.svg)](https://www.npmjs.com/package/ngx-blade)
[![npm](https://img.shields.io/npm/dw/localeval.svg)](https://www.npmjs.com/package/ngx-blade) 


A simplistic blade component for Angular with minimize/maximize and a close button

## Installation

`npm i ngx-blade --save`

## Usage

```html
<ngx-blade [title]="bladeTitle" width="50" (onClose)="onBladeClose()" *ngIf="showBlade" #blade>
  <div class="custom">
    <h4> Lorem Ipsum </h4>
    <button type="button" (click)="blade.close()">Close blade</button>
  </div>
</ngx-blade>
```
