import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { UpgradeModule } from '@angular/upgrade/static';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule).then((platform) => {
  const upgrade = platform.injector.get(UpgradeModule) as UpgradeModule;
  upgrade.bootstrap(document.body, ['ng1DemoApp'], {strictDi: true});
});
