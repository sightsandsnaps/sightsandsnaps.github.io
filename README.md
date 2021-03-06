# Sights &amp; Snaps Blog
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.0.

## Basics
Use Command Prompt or Terminal with super user access

install nodejs

update npm (`npm install npm@latest -g`)

install angular cli (`npm install -g @angular/cli@latest`)

install npm-check-updates (`npm install -g npm-check-updates`)

update all dependencies (`ncu -u -a`)

re-install node_modules (delete node_modules folder + package-lock.json file) & run `npm install`

install Material (`npm install --save @angular/material @angular/cdk @angular/animations`)


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

For getting it ready for github-pages `ng build --prod --base-href "https://sightsandsnaps.github.io/"`

Deploying it to master github-pages `ngh --branch=master`

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
