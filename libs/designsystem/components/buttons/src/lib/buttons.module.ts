import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { ButtonModule as DSButtonModule } from '@backbase/ui-ang';
import { ButtonsComponent } from './buttons.component';

export const buttonsRoutes: Route[] = [
  {
    path: '',
    component: ButtonsComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(buttonsRoutes), DSButtonModule],
  declarations: [ButtonsComponent],
})
export class ButtonsModule {}
