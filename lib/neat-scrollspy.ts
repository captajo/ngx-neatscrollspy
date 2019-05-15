import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export * from './neat-scrollspy.service';
export * from './neat-scrollspy.directive';
export * from './neat-scrollspy.component';

import { NestScrollspyService } from './neat-scrollspy.service';
import { NeatScrollspyDirective } from './neat-scrollspy.directive';
import { NeatScrollspyTemplateComponent } from './neat-scrollspy.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [ NeatScrollspyDirective, NeatScrollspyTemplateComponent ],
  exports: [ NeatScrollspyDirective, NeatScrollspyTemplateComponent ],
  providers: [NestScrollspyService]
})
export class NeatScrollspyModule {}