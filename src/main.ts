import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

function main(): void {
  platformBrowserDynamic().bootstrapModule(AppModule);
}

window['ng2'] = main;
main();
