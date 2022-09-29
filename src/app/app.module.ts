import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import zh from '@angular/common/locales/zh';

import { NZ_I18N, zh_CN } from 'ng-zorro-antd/i18n';

// mock
import { HttpClientInMemoryWebApiModule, InMemoryBackendConfigArgs } from 'angular-in-memory-web-api';
import { MockService } from '../mock/mock.service';

// 布局相关
import { LayoutModule } from './layouts/layout.modules'

// 拦截器
import { HttpsInterceptor } from './interceptors/https.interceptor'

// 弹窗
import { ModalsModule } from './shared/modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

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
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    ModalsModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.

    // 正式环境, 测试环境, Mock 环境  
    HttpClientInMemoryWebApiModule.forRoot(
      MockService, 
      // InMemoryBackendConfigArgs
      { delay: 0, passThruUnknownUrl: true, dataEncapsulation: false}
    )
  ],
  providers: [
    httpInterceptorProviders,
    { provide: NZ_I18N, useValue: zh_CN }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
