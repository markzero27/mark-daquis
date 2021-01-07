import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';

const routes: Routes = [];

const routerOptions: ExtraOptions = {
  useHash: true,
  anchorScrolling: 'enabled',
  onSameUrlNavigation: 'reload',
};
@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
