import {AppComponent} from './app.component';
import {HttpErrorResponse} from '@angular/common/http';
import {ErrorHandler, Injectable, Injector} from '@angular/core';

@Injectable()
export class ErrorsHandler implements ErrorHandler {
    constructor(private appComponent: AppComponent, private injector: Injector) {
    }

    handleError(error: Error) {
        if (error instanceof HttpErrorResponse) {
            // Server or connection error happened
            if (!navigator.onLine) {
                // Handle offline error
                this.appComponent.openErrorModal('Offline: ' + error.message);
            } else {
                // Handle Http Error (error.status === 403, 404...)
                if (error.status === 0) {
                    this.appComponent.openErrorModal('Http error ' + 503 + ': ' + 'The server seems to be offline!');
                } else {
                    this.appComponent.openErrorModal('Http error ' + error.status + ': ' + error.message);
                }
            }
        } else {
            if (error.message === 'Less than three articles') {
                this.appComponent.openErrorModal('Error: The Database contains not enough articles to display');
            } else {
                // Handle Client Error (Angular Error, ReferenceError...)
                this.appComponent.openErrorModal('Client error: ' + error);
            }
        }
        // Log the error anyway
        console.error(error);
    }
}
