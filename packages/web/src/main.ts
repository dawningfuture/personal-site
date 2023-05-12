import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();

  // NOTE: This ensures the app is loaded from the correct origin
  // in production, which allows wildcard subdomain redirects
  if (window.location.origin !== environment.origin) {
    window.location.replace(environment.origin);
  }
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
