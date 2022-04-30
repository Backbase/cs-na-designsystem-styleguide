import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { StyleguideComponent } from './styleguide.component';
import { ReplacePipe } from './pipes/replace.pipe';

export const styleguideRoutes: Route[] = [
  {
    path: '',
    component: StyleguideComponent,
    children: [
      {
        path: '',
        redirectTo: 'buttons',
        pathMatch: 'full',
      },
      {
        path: 'buttons',
        loadChildren: () => import('@backbase/designsystem/components/buttons').then((m) => m.ButtonsModule),
      },
      {
        path: '**',
        redirectTo: 'buttons',
      },
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(styleguideRoutes)],
  declarations: [StyleguideComponent, ReplacePipe],
})
export class StyleguideModule {}
