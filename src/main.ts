import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes, RouterModule } from '@angular/router';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { NgxPermissionsModule } from 'ngx-permissions';
import { importProvidersFrom } from '@angular/core';
import { appRoutes } from './app/app.routes';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { onSameUrlNavigation: 'reload' })],
})
export class AppRoutingModule {}

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes),
    provideHttpClient(withInterceptorsFromDi()),
    importProvidersFrom(NgxPermissionsModule.forRoot(), RouterModule),
  ],
}).catch((err) => console.error(err));
