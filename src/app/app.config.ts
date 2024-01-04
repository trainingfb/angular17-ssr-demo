import { provideHttpClient, withFetch } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(),
    provideHttpClient(
      withFetch()
    )
  ]
};

// DOC
// NOTA: http Client cache le GET
// https://angular.dev/guide/ssr#caching-data-when-using-httpclient
