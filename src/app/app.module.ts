import { BrowserModule } from '@angular/platform-browser';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/app/shared/material.module';
import { LoggerModule } from 'ngx-logger';
import { environment } from 'src/environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AssesmentService } from './shared/service/Assesment.service';
import { APIInterceptorService, DEFAULT_TIMEOUT } from './shared/service/api-interceptor.service';
import { FirstComponent } from './assessment/first/first.component';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    TranslateModule.forRoot(
      {
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
        }
      }),
    AppRoutingModule,
    BrowserAnimationsModule,
    LoggerModule.forRoot(environment.logging),
  ],
  providers: [AssesmentService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: APIInterceptorService,
      multi: true
    },
    {
      provide: DEFAULT_TIMEOUT,
      useValue: 20000
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}