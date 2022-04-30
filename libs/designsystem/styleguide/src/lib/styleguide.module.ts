import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { StyleguideComponent } from './styleguide.component';

export const styleguideRoutes: Route[] = [
  {
    path: '',
    component: StyleguideComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(styleguideRoutes)],
  declarations: [StyleguideComponent],
})
export class StyleguideModule {}
