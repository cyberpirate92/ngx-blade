# NgxBlade

[![Travis](https://travis-ci.com/cyberpirate92/ngx-blade.svg?branch=master)](https://travis-ci.com/cyberpirate92/ngx-blade)
[![npm](https://img.shields.io/npm/v/ngx-blade.svg)](https://www.npmjs.com/package/ngx-blade)
[![npm](https://img.shields.io/npm/dw/ngx-blade.svg)](https://www.npmjs.com/package/ngx-blade)

A simplistic blade component for Angular with minimize/maximize and a close button.

## [Stackblitz Demo](https://stackblitz.com/edit/angular-ngx-blade)

## Installation

**Step 1**: Install NPM package

```bash

npm i ngx-blade --save

```

**Step 2**: Import `NgxBladeModule` into in your module

```typescript

import { NgxBladeModule } from 'ngx-blade';

@NgModule({
    //..
    imports:      [ NgxBladeModule, .. ]
})

```

**Step 3**: Add the default theme to **src/styles.scss** file.

```scss

@import "~ngx-blade/default.scss";

```

---

### `NgxBladeComponent`

#### Selector

```html

<ngx-blade></ngx-blade>

```

#### Inputs

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

### Directives

The following directives should be used within the `ngx-blade` element.

* `ngxBladeHeader` - Blade Header element
* `ngxBladeBody` - Blade body element
* `ngxBladeFooter` - Blade footer element

## Sample Usage

```html

<ngx-blade width="50" (onClose)="onBladeClose()" *ngIf="showBlade" #blade>
  <div ngxBladeHeader>
    Blade title
  </div>
  <div ngxBladeBody>
    <div class="custom">
      <h4> Lorem Ipsum </h4>
      <button type="button" (click)="blade.close()">Close blade</button>
    </div>
    <!-- Not only normal html entities, but components can also be used -->
    <my-component></my-component>
  </div>
  <div ngxBladeFooter>
    Blade Footer
  </div>
</ngx-blade>

```

---

## Theme customization

Since v0.3.0, ngx-blade supports theme customization using SCSS variables.
The following SCSS variables are available for customization

```SCSS

// blade defaults
$ngxBladeBorderColor

// header defaults
$ngxBladeHeaderBackground
$ngxBladeHeaderTextColor

// body defaults
$ngxBladeBodyBackground
$ngxBladeBodyTextColor

// header action button (Minimize/Maximize, Close) defaults 
$ngxBladeActionButtonBackground
$ngxBladeCloseButtonHoverBackground

// footer defaults
$ngxBladeFooterBackground
$ngxBladeFooterTextColor

```

For example, if you like to change the blade's header color to a shade of red, all you have to do is to assign `ngxBladeHeaderBackground` your preferred color before the default theme is imported.

/src/styles.scss
```SCSS

$ngxBladeHeaderBackground: rgba(127, 0, 0, 1);
@import "~ngx-blade/default.scss";

```

## [Demo](https://stackblitz.com/edit/angular-ngx-blade-theme-customization?file=src/styles.scss)
