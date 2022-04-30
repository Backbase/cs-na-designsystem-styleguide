import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { ButtonsComponent } from './buttons.component';

export const buttonsRoutes: Route[] = [
  {
    path: '',
    component: ButtonsComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(buttonsRoutes)],
  declarations: [ButtonsComponent],
})
export class ButtonsModule {}
