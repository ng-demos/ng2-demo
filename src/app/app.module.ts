import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FallbackComponent } from './fallback/fallback.component';
import { CoreModule } from './core/core.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HybridUrlHandlingStrategy } from './core/hash-location-strategy';
import { UrlHandlingStrategy } from '@angular/router';
import { UpgradeModule } from '@angular/upgrade/static';

@NgModule({
  declarations: [
    AppComponent,
    FallbackComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UpgradeModule,
    CoreModule,
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    {provide: UrlHandlingStrategy, useClass: HybridUrlHandlingStrategy},
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
