import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiModule } from './swagger';

@NgModule({
  declarations: [],
  imports: [ApiModule],
  providers: []
})
export class ApisModule {}
