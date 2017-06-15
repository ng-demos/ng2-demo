import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppErrorHandler } from './app-error-handler.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [],
  providers: [
    {provide: ErrorHandler, useClass: AppErrorHandler},
  ],
})
export class CoreModule {
}
