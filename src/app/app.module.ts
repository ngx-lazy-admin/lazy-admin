import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PercentPipe, registerLocaleData } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import zh from '@angular/common/locales/zh';

import { NZ_I18N, zh_CN } from 'ng-zorro-antd/i18n';

import { HttpClientInMemoryWebApiModule, InMemoryBackendConfigArgs } from 'angular-in-memory-web-api';

import { LayoutModule } from './layouts/layout.modules'
import { HttpsInterceptor } from './interceptors/https.interceptor'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserPipe } from './pipes/user.pipe';
import { HtmlPipe } from './pipes/html.pipe';

import { MockService } from '../mock/mock.service';
import { GlobalSearchModule } from './shared/global-search';
import { ThemeSettingModule } from './modules/theme-setting';

/** Http interceptor providers in outside-in order */
const httpInterceptorProviders = [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpsInterceptor,
      multi: true
    },
];


registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    UserPipe,
    HtmlPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    GlobalSearchModule,
    ThemeSettingModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      MockService, 
      // InMemoryBackendConfigArgs
      { delay: 50, passThruUnknownUrl: true, dataEncapsulation: false}
    )
  ],
  providers: [
    httpInterceptorProviders,
    { provide: NZ_I18N, useValue: zh_CN }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
