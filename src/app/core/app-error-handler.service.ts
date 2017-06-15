import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class AppErrorHandler extends ErrorHandler {

  constructor() {
    super();
  }

  handleError(error: any): void {
    console.log('Error');
    console.error(error);
  }

}
