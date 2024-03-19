import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { CoreState } from './store/core/core.state';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(NgxsModule.forRoot([CoreState])), 
      provideHttpClient(),
      
  ]
};
