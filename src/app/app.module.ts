import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import zh from '@angular/common/locales/zh';

// ng-zorro
import { NZ_I18N, zh_CN } from 'ng-zorro-antd/i18n';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { IconsProviderModule } from './modules/icons-provider.module';
import { NgZorroAntdModule } from './modules/ng-zorro-antd.modules';

import { InMemoryDataService } from './services/in-memory-data.service';
import { LayoutModule } from './layout/layout.modeule'
import { HttpsInterceptor } from './interceptors/https.interceptor'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserPipe } from './pipes/user.pipe';
import { HtmlPipe } from './pipes/html.pipe';

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

    IconsProviderModule,
    NgZorroAntdModule,
    // FormlyModule,
    LayoutModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [
    httpInterceptorProviders,
    { provide: NZ_I18N, useValue: zh_CN }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
