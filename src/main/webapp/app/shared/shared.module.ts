import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Api2SharedCommonModule, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [Api2SharedCommonModule],
  declarations: [HasAnyAuthorityDirective],
  exports: [Api2SharedCommonModule, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Api2SharedModule {
  static forRoot() {
    return {
      ngModule: Api2SharedModule
    };
  }
}
