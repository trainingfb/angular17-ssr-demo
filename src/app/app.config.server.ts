import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { LocalstorageServerService } from './core/localstorage.server.service';
import { LocalstorageService } from './core/localstorage.service';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    {
      provide: LocalstorageService,
      useClass: LocalstorageServerService,
    }
  ]
};

export const config = mergeApplicationConfig(
  appConfig,
  serverConfig
);
