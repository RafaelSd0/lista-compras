import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideAuth0 } from '@auth0/auth0-angular';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
  provideZoneChangeDetection({ eventCoalescing: true }),

  provideRouter(routes),

  provideAnimationsAsync(),

  provideAuth0({
    domain: 'http://dev-h1akqwp5consne5a.us.auth0.com',

    clientId: 'f22egNDfmBZb5tHq4llqS9vrySRZpynp',

    authorizationParams: {

    redirect_uri: window.location.origin,

    },

})

]

};
