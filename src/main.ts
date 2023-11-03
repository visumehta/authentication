import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { routes } from './app/app-routing.module';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';


// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));


bootstrapApplication(AppComponent,{
  providers:[
    provideStore({}),
    provideAnimations(),
    provideStoreDevtools(),
    provideHttpClient(),
    {...routes}
  ]
})